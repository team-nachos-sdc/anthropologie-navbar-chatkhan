const Sequelize = require('sequelize');
const products = require('./postIndex.js');

const Product = products.define('product', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    category: {
        type: Sequelize.STRING,
    },
    color: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
    },
    image1: {
        type: Sequelize.STRING,
    },
    image2: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false
});

Product.sync({ force: true })
    .then(() => console.log('Synced up to DB!'))
    .catch(err => console.error('Unable to sync', err))