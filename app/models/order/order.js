/*
id数据库id
order订单id
value交易数量
cost买入价格
price卖出价格
fee交易手续费
status状态（等待买入，买入，等待卖出，卖出）
*/

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order:{
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
