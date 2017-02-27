/*
id数据库id
order订单id
value交易数量
cost买入价格
price卖出价格
fee交易手续费
status状态（等待买入，买入，等待卖出，卖出）
*/
var bson = require('bson');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.STRING(24),
      primaryKey: true,
      defaultValue: bson.ObjectID().toString(),
    },
    order:{
      type: DataTypes.FLOAT,
      allowNull: true
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    cost:{
        type: DataTypes.FLOAT,
        allowNull: false 
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fee:{
        type: DataTypes.FLOAT,
        allowNull: false 
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'order'
  });
};
