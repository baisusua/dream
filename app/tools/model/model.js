var Rx = require('rx');
var $logger = require('../../tools/logs/logHelper');

module.exports = function (model,type,config) {
    var modelHelper = model[type](config);
    
    var handleError = function (error) {
         $logger.writeErr('数据库连接成功!');
        return Rx.Observable.just(error);
    }
    return Rx.Observable.fromPromise(modelHelper).catch(handleError).map((response) => {
        return response;
    });
}