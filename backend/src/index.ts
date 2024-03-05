import './environment';
import './infra/sequelize/db';

import { ExpressServer } from './infra/express/express';
import EntryPoint from './domain/implementations/entity/entryPoints/EntryPoint';
import { CriarClienteEntryPoint } from './application/entryPoints/cliente/CriarClienteEntryPoint';
import { CriarClienteController } from './application/controllers/cliente/CriarClienteController';
import { CriarCliente } from './domain/implementations/useCases/cliente/criarCliente/CriarCliente';
import { ClienteRepository } from './infra/sequelize/repository/ClienteRepository';
import { EditarCliente } from './domain/implementations/useCases/cliente/editarCliente/EditarCliente';
import { EditarClienteController } from './application/controllers/cliente/EditarClienteController';
import { EditarClienteEntryPoint } from './application/entryPoints/cliente/EditarClienteEntryPoint';
import { PessoaRepository } from './infra/sequelize/repository/PessoaRepository';
import { ExcluirCliente } from './domain/implementations/useCases/cliente/excluirCliente/ExcluirCliente';
import { ExcluirClienteController } from './application/controllers/cliente/ExcluirClientecontroller';
import { ExcluirClienteEntryPoint } from './application/entryPoints/cliente/ExcluirClienteEntryPoint';

/* Repositórios */
const clienteRepository = new ClienteRepository();
const pessoaRepository = new PessoaRepository();

const criarCliente = new CriarCliente(clienteRepository, pessoaRepository);
const criarClienteController = new CriarClienteController(criarCliente);
const criarClienteEntryPoint = new CriarClienteEntryPoint(criarClienteController);

const editarCliente = new EditarCliente(clienteRepository, pessoaRepository);
const editarClienteController = new EditarClienteController(editarCliente);
const editarclienteEntryPoint = new EditarClienteEntryPoint(editarClienteController);

const excluirCliente = new ExcluirCliente(clienteRepository, pessoaRepository);
const excluirClienteController = new ExcluirClienteController(excluirCliente);
const excluirClienteEntryPoint = new ExcluirClienteEntryPoint(excluirClienteController);

const entryPoints: EntryPoint[] = [
  criarClienteEntryPoint,
  editarclienteEntryPoint,
  excluirClienteEntryPoint,
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