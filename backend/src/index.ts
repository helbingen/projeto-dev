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
import { TelefoneRepository } from './infra/sequelize/repository/TelefoneRepository';
import { CriarTelefone } from './domain/implementations/useCases/telefone/criarTelefone/CriarTelefone';
import { CriarTelefoneController } from './application/controllers/telefone/CriarTelefoneController';
import { CriarTelefoneEntryPoint } from './application/entryPoints/telefone/CriarTelefoneEntryPoint';
import { EditarTelefoneController } from './application/controllers/telefone/EditarTelefoneController';
import { EditarTelefoneEntryPoint } from './application/entryPoints/telefone/EditarTelefoneEntryPoint';
import { ExcluirTelefoneEntryPoint } from './application/entryPoints/telefone/ExcluirTelefoneEntryPoint';
import { ListarTelefoneEntryPoint } from './application/entryPoints/telefone/ListarTelefoneEntryPoint';
import { EditarTelefone } from './domain/implementations/useCases/telefone/editarTelefone/EditarTelefone';
import { ExcluirTelefone } from './domain/implementations/useCases/telefone/excluirTelefone/ExcluirTelefone';
import { ListarTelefone } from './domain/implementations/useCases/telefone/listarTelefone/ListarTelefone';
import { ExcluirTelefoneController } from './application/controllers/telefone/ExcluirTelefoneController';
import { ListarTelefoneController } from './application/controllers/telefone/ListarTelefoneController';
import { EmailRepository } from './infra/sequelize/repository/EmailRepository';
import { CriarEmail } from './domain/implementations/useCases/email/criarEmail/CriarEmail';
import { EditarEmail } from './domain/implementations/useCases/email/editarEmail/EditarEmail';
import { ExcluirEmail } from './domain/implementations/useCases/email/excluirEmail/ExcluirTelefone';
import { ListarEmail } from './domain/implementations/useCases/email/listarEmail/ListarEmail';
import { CriarEmailController } from './application/controllers/email/CriarEmailController';
import { EditarEmailController } from './application/controllers/email/EditarEmailController';
import { ExcluirEmailController } from './application/controllers/email/ExcluirEmailController';
import { ListarEmailController } from './application/controllers/email/ListarEmailController';
import { CriarEmailEntryPoint } from './application/entryPoints/email/CriarEmailEntryPoint';
import { EditarEmailEntryPoint } from './application/entryPoints/email/EditarEmailEntryPoint';
import { ExcluirEmailEntryPoint } from './application/entryPoints/email/ExcluiremailEntryPoint';
import { ListarEmailEntryPoint } from './application/entryPoints/email/ListarEmailEntryPoint';

/* Repositórios */
const clienteRepository = new ClienteRepository();
const pessoaRepository = new PessoaRepository();
const enderecoRepository = new EnderecoRepository();
const telefoneRepository = new TelefoneRepository();
const emailRepository = new EmailRepository();


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

/* Telefone */

const criarTelefone = new CriarTelefone(pessoaRepository, telefoneRepository);
const criarTelefoneController = new CriarTelefoneController(criarTelefone);
const criarTelefoneEntryPoint = new CriarTelefoneEntryPoint(criarTelefoneController);

const editarTelefone = new EditarTelefone(pessoaRepository, telefoneRepository);
const editarTelefoneController = new EditarTelefoneController(editarTelefone);
const editarTelefoneEntryPoint = new EditarTelefoneEntryPoint(editarTelefoneController);

const excluirTelefone = new ExcluirTelefone(telefoneRepository);
const excluirTelefoneController = new ExcluirTelefoneController(excluirTelefone);
const excluirTelefoneEntryPoint = new ExcluirTelefoneEntryPoint(excluirTelefoneController);

const listarTelefone = new ListarTelefone(telefoneRepository);
const listarTelefoneController = new ListarTelefoneController(listarTelefone);
const listarTelefoneEntryPoint = new ListarTelefoneEntryPoint(listarTelefoneController);

/* Email */

const criarEmail = new CriarEmail(pessoaRepository, emailRepository);
const criarEmailController = new CriarEmailController(criarEmail);
const criarEmailEntryPoint = new CriarEmailEntryPoint(criarEmailController);

const editarEmail = new EditarEmail(pessoaRepository, emailRepository);
const editarEmailController = new EditarEmailController(editarEmail);
const editarEmailEntryPoint = new EditarEmailEntryPoint(editarEmailController);

const excluirEmail = new ExcluirEmail(emailRepository);
const excluirEmailController = new ExcluirEmailController(excluirEmail);
const excluirEmailEntryPoint = new ExcluirEmailEntryPoint(excluirEmailController);

const listarEmail = new ListarEmail(emailRepository);
const listarEmailController = new ListarEmailController(listarEmail);
const listarEmailEntryPoint = new ListarEmailEntryPoint(listarEmailController);

const entryPoints: EntryPoint[] = [
  criarClienteEntryPoint,
  editarclienteEntryPoint,
  excluirClienteEntryPoint,
  listarClienteEntryPoint,
  criarEnderecoEntryPoint,
  editarEnderecoEntryPoint,
  excluirEnderecoEntryPoint,
  listarEnderecoEntryPoint,
  criarTelefoneEntryPoint,
  editarTelefoneEntryPoint,
  excluirTelefoneEntryPoint,
  listarTelefoneEntryPoint,
  criarEmailEntryPoint,
  editarEmailEntryPoint,
  excluirEmailEntryPoint,
  listarEmailEntryPoint
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