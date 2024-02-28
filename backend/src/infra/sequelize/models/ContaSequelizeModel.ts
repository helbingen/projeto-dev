import { DataTypes, Model, Sequelize } from 'sequelize';
import { IContaModel, IContaModelCreate } from '../../../domain/protocols/models/entity/conta';

export default class ContaSequelizeModel extends Model<IContaModel, IContaModelCreate> implements IContaModel {
  public email!: string;

  public nome!: string;

  public senha!: string;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        email: {
          type: DataTypes.TEXT,
          primaryKey: true,
          allowNull: false,
        },
        nome: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        senha: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'conta',
        underscored: false,
        indexes: [{ fields: ['email'] }],
      },
    );
  }
}
