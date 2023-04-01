const { Sequelize } = require('sequelize');
const GoodsModel = require('../models/goods');

const sequelize = new Sequelize('fartsa', 'fartsa', 'S$PD5TsU@ke8JEhT~J9M', {
    host: 'localhost',
    dialect: 'mysql'
});

/*const models = [
    // Add here all of your models
    require('../models/goods'),
].map(m=>m(sequelize));*/

const Goods = GoodsModel(sequelize);

//sequelize.sync().then(console.log('DB is synced'));
module.exports = { Goods };