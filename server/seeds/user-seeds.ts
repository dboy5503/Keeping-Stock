import { User } from '../src/models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'Marquel',email: 'marquel@gmail.com', password: 'password' },
    { username:'Sunny', email: 'sunny@scribe.com', password: 'password' },
    { username:'Ray', email: 'radiant@comet.com', password: 'password' },
  ], { individualHooks: true });
};
