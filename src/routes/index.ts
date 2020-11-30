import { Router } from 'express';

import ordersRouter from './orders.routes';
import payloadsRouter from './payloads.routes';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ message: 'Hello from FakeAPi!' });
});

routes.use('/orders', ordersRouter);
routes.use('/payloads', payloadsRouter);

export default routes;
