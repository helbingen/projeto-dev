import { DataTypes, Model, Sequelize } from 'sequelize';
import { IContaModel } from '../../../domain/protocols/models/entity/conta';
import { IClienteModel, IClienteModelCreate } from '../../../domain/protocols/models/entity/cliente';

export default class ClienteSequelizeModel extends Model<IClienteModel, IClienteModelCreate> implements IClienteModel {

  public dataCadastro!: Date;

  public situacao!: boolean;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        data_cadastro: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        situacao: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        }
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'cliente',
        underscored: false,
      },
    );
  }
}
