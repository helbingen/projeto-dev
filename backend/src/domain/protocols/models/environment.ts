export interface IEnvironment {
  PORT: string;
  NODE_ENV: 'DEV' | 'PROD' | 'HOMO';
  DB_HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASS: string;
  DB_PORT: string;
  DB_DIALECT: string;
  JWT_SECRET: string;
  JWT_ALGORITHM: string;
  TZ: string;
}
