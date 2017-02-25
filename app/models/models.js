var Sequelize = require('sequelize');

var dbStorage = require('../db');

var Account = require('../models/account/account');
var History = require('../models/history/history');
var Order = require('../models/order/order');


/*
导出表Banner实例
*/
module.exports={
    account:Account(dbStorage, Sequelize),
    history:History(dbStorage, Sequelize),
    order:Order(dbStorage, Sequelize)
}