import { Sequelize } from 'sequelize/types';
import ClienteSequelizeModel from './models/ClienteSequelizeModel';
import ContaSequelizeModel from './models/ContaSequelizeModel';
import EmailSequelizeModel from './models/EmailSequelizeModel';
import EnderecoSequelizeModel from './models/EnderecoSequelizeModel';
import PessoaSequelizeModel from './models/PessoaSequelizeModel';
import TelefoneSequelizeModel from './models/TelefoneSequelizeModel';
import RepresentanteSequelizeModel from './models/RepresentanteSequelizeModel';
import TipoContatoSequelizeModel from './models/TipoContatoSequelizeModel';

export default class Models {
  public cliente: typeof ClienteSequelizeModel = ClienteSequelizeModel;

  public conta: typeof ContaSequelizeModel = ContaSequelizeModel;

  public email: typeof EmailSequelizeModel = EmailSequelizeModel;

  public endereco: typeof EnderecoSequelizeModel = EnderecoSequelizeModel;

  public pessoa: typeof PessoaSequelizeModel = PessoaSequelizeModel;

  public telefone: typeof TelefoneSequelizeModel = TelefoneSequelizeModel;

  public representante: typeof RepresentanteSequelizeModel = RepresentanteSequelizeModel;

  public tipoContato: typeof TipoContatoSequelizeModel = TipoContatoSequelizeModel;

  constructor(sequelize: Sequelize) {
    Object.keys(this).forEach((pModel: string) => {
      if (pModel !== undefined && this[pModel].initialization !== undefined) {
        this[pModel].initialization(sequelize);
      }
    });
    Object.keys(this).forEach((pModel: string) => {
      if (this[pModel] !== undefined && this[pModel].association !== undefined) {
        this[pModel].association(this);
      }
    });
  }
}