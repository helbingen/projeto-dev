import { DataTypes, Model, Sequelize } from 'sequelize';
import { ITelefoneModel, ITelefoneModelCreate } from '../../../domain/protocols/models/entity/objectValues/telefone';
import Models from '../models';

export default class TelefoneSequelizeModel extends Model<ITelefoneModel, ITelefoneModelCreate> implements ITelefoneModel {

  numero!: string;

  is_principal!: boolean;

  tipoContato!: string;

  idContato!: string;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        identificacao: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        numero: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        is_principal: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        idContato: {
          type: DataTypes.UUID,
          allowNull: false,
        }
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'telefone',
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
    });
    this.belongsTo(models.tipoContato, {
      as: 'tipo_contato',
      foreignKey: {
        field: 'idContato',
        name: 'idContato',
      },
    });
  }
}
