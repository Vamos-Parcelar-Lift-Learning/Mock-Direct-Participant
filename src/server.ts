import * as dotenv from 'dotenv';
import * as jsonServer from 'json-server';
import * as routes from './routes.json';
import middlewares from './middlewares/generate-data';
import genData from './middlewares/generate-data';

dotenv.config();
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const port = 3000;

genData();
server.use(jsonServer.bodyParser);
server.use(jsonServer.rewriter(routes));
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Mock direct participant is running on port ${port}`);
});
