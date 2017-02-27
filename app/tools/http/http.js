var request = require('superagent');
var $logger = require('../../tools/logs/logHelper');
var Rx = require('rx');

module.exports = function (config) {
    var httpHelper;
    if (config.methods) {
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
        $logger.writeErr('数据库连接成功!');
        return Rx.Observable.just(error);
    }
    return Rx.Observable.fromPromise(httpHelper).catch(handleError).map((response) => {
        return JSON.parse(response.text);
    });
}