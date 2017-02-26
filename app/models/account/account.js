/*
每次交易都更新一次
id数据库id
name账户名
cost充值成本（5000）
balance账户剩余比特币
funds账户剩余现金
total账户总价值
profit总盈利
*/
var bson = require('bson');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('account', {
    id: {
      type: DataTypes.STRING(24),
      primaryKey: true,
      defaultValue: bson.ObjectId().toString(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    funds: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    profit: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'account'
  })
};