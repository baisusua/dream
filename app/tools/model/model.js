var Rx = require('rx');
var $logger = require('../../tools/logs/logHelper');

module.exports = function (model,type,config) {
    var modelHelper = model[type](config);
    
    var handleError = function (error) {
         $logger.helper.writeErr(error);
        return Rx.Observable.just(error);
    }
    return Rx.Observable.fromPromise(modelHelper).catch(handleError).map((response) => {
        return response;
    });
}