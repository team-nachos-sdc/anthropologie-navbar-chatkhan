const Sequelize = require('sequelize');
const products = require('./postIndex.js');

const ProductPost = products.define('product', {
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

ProductPost.sync()
    .then(() => console.log('Synced up to DB!'))
    .catch((err) => console.log('Unable to connect', err))

module.exports = ProductPost;