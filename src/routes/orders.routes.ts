import { Router } from 'express';

import OrdersController from '../controllers/OrdersController';
import authMiddleware from '../middlewares/ensureAuthenticate';

const usersRouter = Router();
const usersController = new OrdersController();

usersRouter.use(authMiddleware);

usersRouter.post('/', usersController.create);
usersRouter.get('/:id', usersController.show);

export default usersRouter;
