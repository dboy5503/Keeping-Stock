const forceDatabaseRefresh = false;

import express from 'express';
import sequelize from './config/connection.js';

const app = express();
const PORT = process.env.PORT || 3001;
