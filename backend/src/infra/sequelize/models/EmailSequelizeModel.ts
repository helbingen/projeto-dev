import { DataTypes, Model, Sequelize } from 'sequelize';
import { IEmailModel, IEmailModelCreate } from '../../../domain/protocols/models/entity/email';

export default class EmailSequelizeModel extends Model<IEmailModel, IEmailModelCreate> implements IEmailModel {

  numero!: string;

  is_principal!: boolean;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        email: {
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
        tableName: 'email',
        underscored: false,
      },
    );
  }
}
