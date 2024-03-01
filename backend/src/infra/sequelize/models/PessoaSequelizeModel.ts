import { DataTypes, Model, Sequelize } from 'sequelize';
import { IContaModel } from '../../../domain/protocols/models/entity/objectValues/conta';
import { IPessoaModel, IPessoaModelCreate } from '../../../domain/protocols/models/entity/objectValues/pessoa';

export default class PessoaSequelizeModel extends Model<IPessoaModel, IPessoaModelCreate> implements IPessoaModel {
  public email!: string;

  public nome!: string;

  public senha!: string;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        nome: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        identificacao: {
          type: DataTypes.TEXT,
          primaryKey: true,
        },
        nome_fantasia: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        nome_mae: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        inscrição_municipal: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        inscrição_estadual: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'pessoa',
        underscored: false,
        indexes: [{ fields: ['identificacao'] }],
      },
    );
  }
}
