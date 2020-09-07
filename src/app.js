import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // set this servers
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(cors({
      origin: '*'
    }));

  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
