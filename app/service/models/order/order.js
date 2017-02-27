var $model = require("../../../tools/model/model");
var OrderTable = require('../../../models/models').order;

/*
添加账户详细
*/

var add = function (config){
     return $model(OrderTable,'create',config);
}

/*
查询账户详细
*/
var select = function (config){
     return $model(OrderTable,'findOne',config);
}

/*
更新账户详细
*/
var update = function (config){
     return $model(OrderTable,'update',config);
}

/*
删除账户详细
*/
var destroy = function (config){
     return $model(OrderTable,'destroy',config);
}

module.exports = {
    add:add,
    select:select,
    update:update,
    destroy:destroy
}
 