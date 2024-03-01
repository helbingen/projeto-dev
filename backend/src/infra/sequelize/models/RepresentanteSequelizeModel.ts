import { DataTypes, Model, Sequelize } from 'sequelize';
import { IRepresentanteModel, IRepresentanteModelCreate } from '../../../domain/protocols/models/entity/objectValues/representante';
import Models from '../models';

export default class RepresentanteSequelizeModel extends Model<IRepresentanteModel, IRepresentanteModelCreate> implements IRepresentanteModel {
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
