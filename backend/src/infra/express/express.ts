import Express, { response } from 'express';
import * as http from 'http';
import * as https from 'https';
import Cors from 'cors';
import ExpressRouterBuilder from './ExpressRouterBuilder';
import EntryPoint from '../../domain/implementations/entity/entryPoints/EntryPoint';
import header from './middleware/header';
import { bodyParserJson, bodyParserUrlencoded } from './middleware/bodyParser';
import morgan from './middleware/morgan';
import helmet from 'helmet';
import cors from 'cors';

export interface ApplicationServerInterface {
  express: Express.Application;
  server: http.Server | https.Server;
}

export class ExpressServer implements ApplicationServerInterface {
  public express: Express.Application;

  public server: http.Server;

  private builder: ExpressRouterBuilder = new ExpressRouterBuilder();

  constructor() {
    this.express = Express();

    this.middlewares();
    this.server = http.createServer(this.express);
  }

  private middlewares(): void {
    this.express.use(header());
    this.express.use(bodyParserJson());
    this.express.use(bodyParserUrlencoded());
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(morgan());
  }

  public start(): void {
    this.server.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  }

  public setEntryPoints(pEntryPoint: EntryPoint | EntryPoint[]): void {
    if (pEntryPoint instanceof Array) {
      for (const entryPoint of pEntryPoint) {
        this.express.use(this.builder.build(entryPoint));
      }
    } else {
      this.express.use(this.builder.build(pEntryPoint));
    }
  }
}