var $model = require("../../../tools/model/model");
var AccountTable = require('../../../models/models').account;

/*
添加账户详细
*/

var add = function (config){
     return $model(AccountTable,'create',config);
}

/*
查询账户详细
*/
var select = function (config){
     return $model(AccountTable,'findOne',config);
}

/*
更新账户详细
*/
var update = function (config){
     return $model(AccountTable,'update',config);
}

/*
删除账户详细
*/
var destroy = function (config){
     return $model(AccountTable,'destroy',config);
}

module.exports = {
    add:add,
    select:select,
    update:update,
    destroy:destroy
}
 