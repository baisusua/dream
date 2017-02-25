/*
每次交易都更新一次
id数据库id
cost充值成本（5000）
balance账户剩余比特币
funds账户剩余现金
total账户总价值
profit总盈利
*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('account', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cost: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
  });
};