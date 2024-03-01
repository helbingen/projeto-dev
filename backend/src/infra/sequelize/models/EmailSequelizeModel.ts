import { DataTypes, Model, Sequelize } from 'sequelize';
import { IEmailModel, IEmailModelCreate } from '../../../domain/protocols/models/entity/objectValues/email';
import Models from '../models';

export default class EmailSequelizeModel extends Model<IEmailModel, IEmailModelCreate> implements IEmailModel {

  public numero!: string;

  public is_principal!: boolean;

  public identificacao!: string;

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
        identificacao: {
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
