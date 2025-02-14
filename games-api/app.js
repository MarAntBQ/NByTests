const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database.util');
const config = require('./config');

// Import Routes
const defaultRoutes = require('./routes/default.routes');

const app = express();
// Setup Cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// App Routes
app.use('/api', defaultRoutes);

// Sync Database and start server
sequelize.sync({ alter: true })
    .then(() => {
        app.listen(config.server.port, () => {
            console.log(`Server is running on port ${config.server.port}`);
        });
    })
    .catch(err => {
        console.log(err);
    });