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
import { ContaRepository } from './infra/sequelize/repository/ContaRepository';
import { CriarConta } from './domain/implementations/useCases/conta/criarConta/CriarConta';
import { CriarContaController } from './application/controllers/conta/CriarContaController';
import { CriarContaEntryPoint } from './application/entryPoints/conta/CriarContaEntryPoint';
import { Login } from './domain/implementations/useCases/conta/login/Login';
import { LoginController } from './application/controllers/conta/LoginController';
import { LoginEntryPoint } from './application/entryPoints/conta/Login';
import { EditarConta } from './domain/implementations/useCases/conta/editarConta/EditarConta';
import { EditarContaController } from './application/controllers/conta/EditarContaController';
import { EditarContaEntryPoint } from './application/entryPoints/conta/EditarContaEntryPoint';
import { ListarContaController } from './application/controllers/conta/ListarContaController';
import { ListarContaEntryPoint } from './application/entryPoints/conta/ListarContaEntryPoint';
import { ListarConta } from './domain/implementations/useCases/conta/listarConta/ListarConta';
import { RepresentanteRepository } from './infra/sequelize/repository/RepresentanteRepository';
import { CriarRepresentante } from './domain/implementations/useCases/representante/criarRepresentante/CriarRepresentante';
import { CriarRepresentanteController } from './application/controllers/representante/CriarRepresentanteController';
import { CriarRepresentanteEntryPoint } from './application/entryPoints/representante/CriarRepresentanteEntryPoint';
import { EditarRepresentante } from './domain/implementations/useCases/representante/editarRepresentante/EditarRepresentante';
import { EditarRepresentanteController } from './application/controllers/representante/EditarRepresentanteController';
import { EditarRepresentanteEntryPoint } from './application/entryPoints/representante/EditarRepresentanteEntryPoint';
import { ExcluirRepresentante } from './domain/implementations/useCases/representante/excluirRepresentante/ExcluirRepresentante';
import { ExcluirRepresentanteController } from './application/controllers/representante/ExcluirRepresentanteController';
import { ExcluirRepresentanteEntryPoint } from './application/entryPoints/representante/ExcluirRepresentanteEntryPoint';
import { ListarRepresentante } from './domain/implementations/useCases/representante/listarRepresentante/ListarRepresentante';
import { ListarRepresentanteController } from './application/controllers/representante/ListarRepresentanteController';
import { ListarRepresentanteEntryPoint } from './application/entryPoints/representante/ListarRepresentanteEntryPoint';
import { ListarClientePorIdentificacao } from './domain/implementations/useCases/cliente/listarClientePorIdentitificacao/ListarClientePorIdentificacao';
import { ListarClientePorIdentificacaoController } from './application/controllers/cliente/ListarClientePorIdentificacaoController';
import { ListarClientePorIdentificacaoEntryPoint } from './application/entryPoints/cliente/ListarClientePorIdentificacaoEntryPoint';
import { ListarRepresentantePorId } from './domain/implementations/useCases/representante/listarRepresentantePorId/ListarRepresentantePorId';
import { ListarRepresentantePorIdController } from './application/controllers/representante/ListarRepresentantePorIdController';
import { ListarRepresentantePorIdEntryPoint } from './application/entryPoints/representante/ListarRepresentantePorIdEntryPoint';
import { ListarTelefonePorId } from './domain/implementations/useCases/telefone/listarTelefonePorId/ListarTelefonePorId';
import { ListarTelefonePorIdController } from './application/controllers/telefone/ListarTelefonePorIdController';
import { ListarTelefonePorIdEntryPoint } from './application/entryPoints/telefone/ListarTelefonePorIdEntryPoint';
import { ListarEmailPorId } from './domain/implementations/useCases/email/listarEmailPorId/ListarEmailPorId';
import { ListarEmailPorIdController } from './application/controllers/email/ListarEmailPorIdController';
import { ListarEmailPorIdEntryPoint } from './application/entryPoints/email/ListarEmailPorIdEntryPoint';
import { TipoContatoRepository } from './infra/sequelize/repository/TipoContatoRepository';
import { ListarContatoPorId } from './domain/implementations/useCases/tipoContato/listarContatoPorId/ListarContatoPorId';
import { ListarContatoPorIdController } from './application/controllers/contato/ListarContatoPorIdController';
import { ListarContatoPorIdEntryPoint } from './application/entryPoints/contato/ListarContatoPorIdEntryPoint';
import { CriarContato } from './domain/implementations/useCases/tipoContato/criarContato/CriarContato';
import { CriarContatoController } from './application/controllers/contato/CriarContatoController';
import { CriarContatoEntryPoint } from './application/entryPoints/contato/CriarContatoEntryPoint';
import { EditarContato } from './domain/implementations/useCases/tipoContato/editarContato/EditarContato';
import { EditarContatoController } from './application/controllers/contato/EditarContatoController';
import { ExcluirContato } from './domain/implementations/useCases/tipoContato/excluirContato/ExcluirContato';
import { ExcluirContatoController } from './application/controllers/contato/ExcluirContatoController';
import { EditarContatoEntryPoint } from './application/entryPoints/contato/EditarContatoEntryPoint';
import { ExcluirContatoEntryPoint } from './application/entryPoints/contato/ExcluirContatoEntryPoint';
import { ListarContato } from './domain/implementations/useCases/tipoContato/listarContato/ListarContato';
import { ListarContatoController } from './application/controllers/contato/ListarContatoController';
import { ListarContatoEntryPoint } from './application/entryPoints/contato/ListarContatoEntryPoint';
import AutenticadoGuard from './application/guards/AutenticadoGuard';
import JwtServices from './domain/implementations/services/Jwt.service';



const jwtServices = new JwtServices;

const autenticadoGuard = new AutenticadoGuard(jwtServices)

/* Repositórios */
const clienteRepository = new ClienteRepository();
const pessoaRepository = new PessoaRepository();
const enderecoRepository = new EnderecoRepository();
const telefoneRepository = new TelefoneRepository();
const emailRepository = new EmailRepository();
const contaRepository = new ContaRepository();
const representanteRepository = new RepresentanteRepository();
const tipoContatoRepository = new TipoContatoRepository();


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

const listarClientePorIdentificacao = new ListarClientePorIdentificacao(clienteRepository, pessoaRepository);
const listarClientePorIdentificacaoController = new ListarClientePorIdentificacaoController(listarClientePorIdentificacao);
const listarClientePorIdentificacaoEntryPoint = new ListarClientePorIdentificacaoEntryPoint(listarClientePorIdentificacaoController);

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

const listarTelefonePorId = new ListarTelefonePorId(telefoneRepository);
const listarTelefonePorIdController = new ListarTelefonePorIdController(listarTelefonePorId);
const listarTelefonePorIdEntryPoint = new ListarTelefonePorIdEntryPoint(listarTelefonePorIdController);

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

const listarEmailPorId = new ListarEmailPorId(emailRepository);
const listarEmailPorIdController = new ListarEmailPorIdController(listarEmailPorId);
const listarEmailPorIdEntryPoint = new ListarEmailPorIdEntryPoint(listarEmailPorIdController);

/* Conta */

const criarConta = new CriarConta(contaRepository);
const criarContaController = new CriarContaController(criarConta);
const criarContaEntryPoint = new CriarContaEntryPoint(criarContaController, []);

const login = new Login(contaRepository, jwtServices);
const loginController = new LoginController(login);
const loginEntryPoint = new LoginEntryPoint(loginController, []);

const editarConta = new EditarConta(contaRepository);
const editarContaController = new EditarContaController(editarConta);
const editarContaEntryPoint = new EditarContaEntryPoint(editarContaController, [autenticadoGuard]);

const listarConta = new ListarConta(contaRepository);
const listarContaController = new ListarContaController(listarConta);
const listarContaEntryPoint = new ListarContaEntryPoint(listarContaController);

/* Representante */

const criarRepresentante = new CriarRepresentante(representanteRepository, clienteRepository);
const criarRepresentanteController = new CriarRepresentanteController(criarRepresentante);
const criarRepresentanteEntryPoint = new CriarRepresentanteEntryPoint(criarRepresentanteController);

const editarRepresentante = new EditarRepresentante(representanteRepository, clienteRepository);
const editarRepresentanteController = new EditarRepresentanteController(editarRepresentante);
const editarRepresentanteEntryPoint = new EditarRepresentanteEntryPoint(editarRepresentanteController);

const excluirRepresentante = new ExcluirRepresentante(representanteRepository, clienteRepository);
const excluirRepresentanteController = new ExcluirRepresentanteController(excluirRepresentante);
const excluirRepresentanteEntryPoint = new ExcluirRepresentanteEntryPoint(excluirRepresentanteController);

const listarRepresentante = new ListarRepresentante(representanteRepository);
const listarRepresentanteController = new ListarRepresentanteController(listarRepresentante);
const listarRepresentanteEntryPoint = new ListarRepresentanteEntryPoint(listarRepresentanteController);

const listarRepresentantePorId = new ListarRepresentantePorId(representanteRepository);
const listarRepresentantePorIdController = new ListarRepresentantePorIdController(listarRepresentantePorId);
const listarRepresentantePorIdEntryPoint = new ListarRepresentantePorIdEntryPoint(listarRepresentantePorIdController);

// Contatos

const criarContato = new CriarContato(tipoContatoRepository);
const criarContatoController = new CriarContatoController(criarContato);
const criarContatoEntryPoint = new CriarContatoEntryPoint(criarContatoController);

const listarContatoPorId = new ListarContatoPorId(tipoContatoRepository);
const listarContatoPorIdController = new ListarContatoPorIdController(listarContatoPorId);
const listarContatoPorIdEntryPoint = new ListarContatoPorIdEntryPoint(listarContatoPorIdController);

const editarContato = new EditarContato(tipoContatoRepository);
const editarContatoController = new EditarContatoController(editarContato);
const editarContatoEntryPoint = new EditarContatoEntryPoint(editarContatoController);

const excluirContato = new ExcluirContato(tipoContatoRepository);
const excluirContatoController = new ExcluirContatoController(excluirContato);
const excluirContatoEntryPoint = new ExcluirContatoEntryPoint(excluirContatoController);

const listarContato = new ListarContato(tipoContatoRepository);
const listarContatoController = new ListarContatoController(listarContato);
const listarContatoEntryPoint = new ListarContatoEntryPoint(listarContatoController);

const entryPoints: EntryPoint[] = [
  criarClienteEntryPoint,
  editarclienteEntryPoint,
  excluirClienteEntryPoint,
  listarClienteEntryPoint,
  listarClientePorIdentificacaoEntryPoint,
  criarEnderecoEntryPoint,
  editarEnderecoEntryPoint,
  excluirEnderecoEntryPoint,
  listarEnderecoEntryPoint,
  criarTelefoneEntryPoint,
  editarTelefoneEntryPoint,
  excluirTelefoneEntryPoint,
  listarTelefoneEntryPoint,
  listarTelefonePorIdEntryPoint,
  criarEmailEntryPoint,
  editarEmailEntryPoint,
  excluirEmailEntryPoint,
  listarEmailEntryPoint,
  listarEmailPorIdEntryPoint,
  criarContaEntryPoint,
  loginEntryPoint,
  editarContaEntryPoint,
  listarContaEntryPoint,
  criarRepresentanteEntryPoint,
  editarRepresentanteEntryPoint,
  excluirRepresentanteEntryPoint,
  listarRepresentanteEntryPoint,
  listarRepresentantePorIdEntryPoint,
  listarContatoPorIdEntryPoint,
  criarContatoEntryPoint,
  editarContatoEntryPoint,
  excluirContatoEntryPoint,
  listarContatoEntryPoint
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