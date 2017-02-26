var Sequelize = require('sequelize');

var dbStorage = require('../db/dbStorage');

var Account = require('./account/account');
var History = require('./history/history');
var Order = require('./order/order');


/*
导出表实例
*/
module.exports={
    account:Account(dbStorage, Sequelize),
    history:History(dbStorage, Sequelize),
    order:Order(dbStorage, Sequelize)
}