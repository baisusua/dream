var Rx = require('rx');

var $http = require('../../../tools/http/http');
var $sign = require('../../../tools/sign/sign');
var OKCoin = require('../../../config/okcoin.json');

/*
查询最新价格
*/
var LastPriceUrl = OKCoin.base + '/ticker.do';
var InquireLastPriceConfig = {
    url:LastPriceUrl
};
module.exports = $http(InquireLastPriceConfig);


