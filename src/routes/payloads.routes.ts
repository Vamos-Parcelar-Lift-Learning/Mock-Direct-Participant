import { Router } from 'express';

import PayloadsController from '../controllers/PayloadsController';

const usersRouter = Router();
const usersController = new PayloadsController();

usersRouter.get('/:id', usersController.show);

export default usersRouter;
