import { DataTypes, Model, Sequelize } from 'sequelize';
import { IClienteModel, IClienteModelCreate } from '../../../domain/protocols/models/entity/objectValues/cliente';
import Models from '../models';

export default class ClienteSequelizeModel extends Model<IClienteModel, IClienteModelCreate> implements IClienteModel {

  public dataCadastro!: Date;

  public situacao!: string;

  public identificacao!: string;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        data_cadastro: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        situacao: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        identificacao: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'cliente',
        underscored: false,
        indexes: [{ fields: ['identificacao'] }],
      },
    );
  }
  static assosiation(models: Models): void {
    this.belongsTo(models.pessoa, {
      as: 'pessoa',
      foreignKey: {
        field: 'identificacao',
        name: 'identificacao',
      },
    })
  }
}
