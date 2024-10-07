import sequelize from '../config/connection.ts';
import { UserFactory } from './user.ts';

const User = UserFactory(sequelize);

export { User };