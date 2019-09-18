const Sequelize = require('sequelize');

const products = new Sequelize('anthro', 'sdc', '', {
    host: 'localhost',
    dialect: 'postgres'
})

products.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });

module.exports = products;