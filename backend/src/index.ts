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
import { ExcluirClienteController } from './application/controllers/cliente/ExcluirClienteController';
import { ExcluirClienteEntryPoint } from './application/entryPoints/cliente/ExcluirClienteEntryPoint';
import { ListarCliente } from './domain/implementations/useCases/cliente/listarCliente/ListarCliente';
import { ListarClienteEntryPoint } from './application/entryPoints/cliente/ListarClienteEntryPoint';
import { ListarClienteController } from './application/controllers/cliente/ListarClienteController';
import { CriarEndereco } from './domain/implementations/useCases/endereco/criarEndereco/CriarEndereco';
import { EnderecoRepository } from './infra/sequelize/repository/EnderecoRepository';
import { CriarEnderecoController } from './application/controllers/endereco/CriarEnderecoController';
import { CriarEnderecoEntryPoint } from './application/entryPoints/endereco/CriarEnderecoEntryPoint';
import { EditarEndereco } from './domain/implementations/useCases/endereco/editarEndereco/EditarEndereco';
import { EditarEnderecoController } from './application/controllers/endereco/EditarEnderecoController';
import { EditarEnderecoEntryPoint } from './application/entryPoints/endereco/EditarEnderecoEntryPoint';
import { ExcluirEndereco } from './domain/implementations/useCases/endereco/excluirEndereco/ExcluirEndereco';
import { ExcluirEnderecoController } from './application/controllers/endereco/ExcluirEnderecoController';
import { ExcluirEnderecoEntryPoint } from './application/entryPoints/endereco/ExcluirEnderecoEntryPoint';
import { ListarEndereco } from './domain/implementations/useCases/endereco/listarEndereco/ListarEndereco';
import { ListarEnderecoController } from './application/controllers/endereco/ListarEnderecoController';
import { ListarEnderecoEntryPoint } from './application/entryPoints/endereco/ListarEnderecoEntryPoint';

/* Repositórios */
const clienteRepository = new ClienteRepository();
const pessoaRepository = new PessoaRepository();
const enderecoRepository = new EnderecoRepository();


/* Cliente */

const criarCliente = new CriarCliente(clienteRepository, pessoaRepository);
const criarClienteController = new CriarClienteController(criarCliente);
const criarClienteEntryPoint = new CriarClienteEntryPoint(criarClienteController);

const editarCliente = new EditarCliente(clienteRepository, pessoaRepository);
const editarClienteController = new EditarClienteController(editarCliente);
const editarclienteEntryPoint = new EditarClienteEntryPoint(editarClienteController);

const excluirCliente = new ExcluirCliente(clienteRepository, pessoaRepository);
const excluirClienteController = new ExcluirClienteController(excluirCliente);
const excluirClienteEntryPoint = new ExcluirClienteEntryPoint(excluirClienteController);

const listarCliente = new ListarCliente(clienteRepository, pessoaRepository);
const listarClienteController = new ListarClienteController(listarCliente);
const listarClienteEntryPoint = new ListarClienteEntryPoint(listarClienteController);

/* Endereço */

const criarEndereco = new CriarEndereco(pessoaRepository, enderecoRepository);
const criarEnderecoController = new CriarEnderecoController(criarEndereco);
const criarEnderecoEntryPoint = new CriarEnderecoEntryPoint(criarEnderecoController);

const editarEndereco = new EditarEndereco(pessoaRepository, enderecoRepository);
const editarEnderecoController = new EditarEnderecoController(editarEndereco);
const editarEnderecoEntryPoint = new EditarEnderecoEntryPoint(editarEnderecoController);

const excluirEndereco = new ExcluirEndereco(enderecoRepository);
const excluirEnderecoController = new ExcluirEnderecoController(excluirEndereco);
const excluirEnderecoEntryPoint = new ExcluirEnderecoEntryPoint(excluirEnderecoController);

const listarEndereco = new ListarEndereco(enderecoRepository);
const listarEnderecoController = new ListarEnderecoController(listarEndereco);
const listarEnderecoEntryPoint = new ListarEnderecoEntryPoint(listarEnderecoController);



const entryPoints: EntryPoint[] = [
  criarClienteEntryPoint,
  editarclienteEntryPoint,
  excluirClienteEntryPoint,
  listarClienteEntryPoint,
  criarEnderecoEntryPoint,
  editarEnderecoEntryPoint,
  excluirEnderecoEntryPoint,
  listarEnderecoEntryPoint,
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