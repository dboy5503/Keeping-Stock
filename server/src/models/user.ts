import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

interface UserAttributes {
  id: number;
  email: string;
  username: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public username!: string;
  public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public async setPassword(password: string): Promise<void> {
      this.password = await bcrypt.hash(password, 10);
    }}

    export function UserFactory(sequelize: Sequelize): typeof User {
      User.init(
        {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            },
            email: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            },
            username: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            },
            password: {
                type : DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'users',
            sequelize,
            hooks: {
                // Hash password before creating a user
              beforeCreate: async (user) => {
                await user.setPassword(user.password);
              },
              // Hash password after updating a user
              beforeUpdate: async (user) => {
                if(user.changed('password'))
                await user.setPassword(user.password);
                },
            },
        }
    );
    return User;
    }
