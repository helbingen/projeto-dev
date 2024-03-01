import { DataTypes, Model, Sequelize } from 'sequelize';
import { IEnderecoModel, IEnderecoModelCreate } from '../../../domain/protocols/models/entity/objectValues/endereco';
import Models from '../models';

export default class EnderecoSequelizeModel extends Model<IEnderecoModel, IEnderecoModelCreate> implements IEnderecoModel {

  public cep!: string;

  public logradouro!: string;

  public numero!: string;

  public complemento!: string;

  public bairro!: string;

  public cidade!: string;

  public estado!: string;

  public is_principal!: boolean;

  public identificacao!: string;

  static initialization(sequelize: Sequelize): void {
    this.init(
      {
        cep: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: true,
        },
        logradouro: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        numero: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        complemento: {
          type: DataTypes.TEXT,
        },
        bairro: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        cidade: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        estado: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        is_principal: {
          type: DataTypes.BOOLEAN,
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
        tableName: 'endereco',
        underscored: false,
        indexes: [{ fields: ['cep'] }],
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
