import { DataTypes, Model, Sequelize } from 'sequelize';
import { ITelefoneModel, ITelefoneModelCreate } from '../../../domain/protocols/models/entity/telefone';

export default class TelefoneSequelizeModel extends Model<ITelefoneModel, ITelefoneModelCreate> implements ITelefoneModel {

  numero!: string;

  is_principal!: boolean;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        numero: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        is_principal: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'telefone',
        underscored: false,
      },
    );
  }
}
