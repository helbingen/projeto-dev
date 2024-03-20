import { DataTypes, Model, Sequelize } from 'sequelize';
import { ITelefoneModel } from '../../../domain/protocols/models/entity/objectValues/telefone';
import Models from '../models';
import { ITipoContatoModel, ITipoContatoModelCreate } from '../../../domain/protocols/models/entity/objectValues/tipoContato';
import { UUID } from 'uuidv7';

export default class TipoContatoSequelizeModel extends Model<ITipoContatoModel, ITipoContatoModelCreate> implements ITipoContatoModel {

  idContato!: string;
  descricaoContato!: string;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        idContato: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        descricaoContato: {
          type: DataTypes.TEXT,
          allowNull: false,
        }
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'tipo_contato',
        underscored: true,
      },
    );
  }
  static association(models: Models): void {
    this.hasMany(models.telefone, {
      as: 'telefones',
      foreignKey: {
        field: 'idContato',
        name: 'idContato',
      },
    });
  }
}
