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
        id_cliente: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'representante',
        underscored: false,
        indexes: [{ fields: ['identificacao'] }],
      },
    );
  }
  static assosiation(models: Models): void {
    this.belongsTo(models.cliente, {
      as: 'cliente',
      foreignKey: {
        field: 'id',
        name: 'id_cliente',
      }
    })
  }
}
