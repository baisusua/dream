var Rx = require('rx');

module.exports = function (model,type,config) {
    var modelHelper = model[type](config);
    
    var handleError = function (error) {
        return Rx.Observable.just(error);
    }
    return Rx.Observable.fromPromise(modelHelper).catch(handleError).map((response) => {
        return response;
    });
}