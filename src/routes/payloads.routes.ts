import { Router } from 'express';

import PayloadsController from '../controllers/PayloadsController';

const usersRouter = Router();
const payloadController = new PayloadsController();

usersRouter.get('/:id', payloadController.show);

export default usersRouter;
