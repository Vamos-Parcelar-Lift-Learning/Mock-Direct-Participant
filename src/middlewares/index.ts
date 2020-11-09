import middlewareValidateOrder from './validateOrder';
import authMiddleware from './authMiddleware';

export default [authMiddleware, middlewareValidateOrder];