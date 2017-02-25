var request = require('superagent');
var Rx = require('rx');


module.exports = function (config) {
    var httpHelper;
    if (config.type) {
        httpHelper = request
            .post(config.url)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send(config.data)
    } else {
        httpHelper = request
            .get(config.url)
            .set('Content-Type', 'application/x-www-form-urlencoded')
    }

    var handleError = function (error) {
        return Rx.Observable.just(error.data);
    }
    return Rx.Observable.fromPromise(httpHelper).catch(handleError).map((response) => {
        return response.text;
    });
}