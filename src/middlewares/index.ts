import middlewareValidateOrder from './validateOrder';
import authMiddleware from './authMiddleware';
import orderResponse from './orderResponse';

export default [authMiddleware, middlewareValidateOrder, orderResponse];