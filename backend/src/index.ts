import './environment';
import './infra/sequelize/db';

import { ExpressServer } from './infra/express/express';
import EntryPoint from './domain/implementations/entity/entryPoints/EntryPoint';
import { CriarClienteEntryPoint } from './application/entryPoints/cliente/CriarClienteEntryPoint';
import { CriarClienteController } from './application/controllers/cliente/CriarClienteController';
import { CriarCliente } from './domain/implementations/useCases/cliente/criarCliente/CriarCliente';
import { ClienteRepository } from './infra/sequelize/repository/ClienteRepository';


const clienteRepository = new ClienteRepository()

const criarCliente = new CriarCliente(clienteRepository);
const criarClientecontroller = new CriarClienteController(criarCliente);
const criarClienteEntryPoint = new CriarClienteEntryPoint(criarClientecontroller);

const entryPoints: EntryPoint[] = [
  criarClienteEntryPoint,
];

const expressServer: ExpressServer = new ExpressServer();
expressServer.setEntryPoints(entryPoints);

process.on('unhandledRejection', (pError) => {
  console.error('');
  console.error('############################## UnhandledRejection ##############################');
  console.error(pError);
  console.error('################################################################################');
  console.error('');
  process.exit();
});

expressServer.start();