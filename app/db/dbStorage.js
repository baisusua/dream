var Sequelize = require('sequelize');
var $logger = require('../tools/logs/logHelper');
var config = require('../config/db.json');

var dbStorage = new Sequelize(config.db_name, config.username, config.password, {
    dialect: "mysql",
    host: config.host,
    port: config.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        underscored: true
    }
});

dbStorage.authenticate()
    .then(function () {
        $logger.writeInfo('数据库连接成功!');
    })
    .catch(function (err) {
        console.log(err);
        $logger.writeErr(err);
    })
    .done();
module.exports = dbStorage;