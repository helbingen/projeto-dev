import { DataTypes, Model, Sequelize } from 'sequelize';
import { IPessoaModel, IPessoaModelCreate } from '../../../domain/protocols/models/entity/objectValues/pessoa';
import Models from '../models';

export default class PessoaSequelizeModel extends Model<IPessoaModel, IPessoaModelCreate> implements IPessoaModel {
  public nome!: string;

  public identificacao!: string;

  public nome_fantasia!: string;

  public nome_mae!: string;

  public inscrição_municipal!: string;

  public inscrição_estadual!: string;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        nome: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        identificacao: {
          type: DataTypes.TEXT,
          allowNull: false,
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

  static association(models: Models): void {
    this.hasMany(models.cliente, {
      as: 'clientes',
      foreignKey: {
        field: 'identificacao',
        name: 'identificacao',
      },
    });
    this.hasMany(models.email, {
      as: 'emails',
      foreignKey: {
        field: 'identificacao',
        name: 'identificacao',
      },
    });
    this.hasMany(models.endereco, {
      as: 'enderecos',
      foreignKey: {
        field: 'identificacao',
        name: 'identificacao',
      },
    });
    this.hasMany(models.representante, {
      as: 'representantes',
      foreignKey: {
        field: 'identificacao',
        name: 'identificacao',
      },
    });
    this.hasMany(models.telefone, {
      as: 'telefones',
      foreignKey: {
        field: 'identificacao',
        name: 'identificacao',
      },
    });
  }
}
