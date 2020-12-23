/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/camelcase */
import { Request, Response } from 'express';
import * as yup from 'yup';

import updateState from '../utils/updateState';

import ORMOrderRepository from '../repositories/implementations/ORMOrderRepository';
import ORMPayloadRepository from '../repositories/implementations/ORMPayloadRepository';

import ShowOrderService from '../services/ShowOrderService';
import CreateOrderService from '../services/CreateOrderService';

export default class StoresController {
  public async create(request: Request, response: Response): Promise<Response> {
    const orderRepository = new ORMOrderRepository();
    const payloadRepository = new ORMPayloadRepository();

    const orderService = new CreateOrderService(
      orderRepository,
      payloadRepository,
    );

    const payloadValidationSchema = yup.object().shape({
      buyer: yup.object().shape({
        cpf: yup
          .string()
          .required()
          .matches(
            /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
          ),
        email: yup.string().email().required(),
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        phone: yup
          .string()
          .required()
          .matches(
            /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/,
          ),
      }),
      items: yup.array().of(
        yup.object().shape({
          item_title: yup.string().required().max(100),
          quantity: yup.number().required().moreThan(0).positive(),
          unit_price: yup.number().required().moreThan(0).positive(),
        }),
      ),
      order_ref: yup.string().required().max(255),
      total: yup.number().required().moreThan(0).positive(),
      wallet: yup
        .string()
        .required()
        .matches(/(?:pix)/),
    });

    const { buyer, items, order_ref, total, wallet } = request.body;

    payloadValidationSchema
      .validate({
        buyer,
        items,
        order_ref,
        total,
        wallet,
      })
      .catch(function (err) {
        console.log('Errors:', err.name, err.errors);
      });

    if (
      await payloadValidationSchema.isValid({
        buyer,
        items,
        order_ref,
        total,
        wallet,
      })
    ) {
      const order = await orderService.execute(request.body);

      const { order_id } = order;
      setTimeout(updateState, 5000, order_id);

      return response.status(200).json({ ...order });
    }
    return response.status(400).json({ message: 'Body out of format' });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const orderRepository = new ORMOrderRepository();
    const orderService = new ShowOrderService(orderRepository);

    const order = await orderService.execute(id);

    return response.status(200).json(order);
  }
}
