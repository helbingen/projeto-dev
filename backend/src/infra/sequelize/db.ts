import { Options, Sequelize, Op, QueryTypes } from 'sequelize';
import Models from './models';

export class Database {
  private dbConfig: Options;

  public sequelize: Sequelize;

  public models: Models;

  public op = Op;

  public queryTypes = QueryTypes;

  constructor(pSchema: string = 'public') {
    this.dbConfig = {
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      dialect: 'postgres',
      define: {
        underscored: true,
        freezeTableName: true,
        schema: pSchema,
      },
      logging: false,
    };
    this.sequelize = new Sequelize(this.dbConfig);
    this.models = new Models(this.sequelize);
    this.sequelize.sync();
  }
}

export default new Database();