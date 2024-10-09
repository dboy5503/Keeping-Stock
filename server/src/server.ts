const forceDatabaseRefresh = false;

import express from 'express';
// import sequelize from './config/connection';
import routes from './routes/index.js'


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('../client/dist'));
app.use(routes)
app.use(express.json());
app.listen(PORT, () => {
    console.log('Server is running')
})
