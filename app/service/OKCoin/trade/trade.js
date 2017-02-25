var Rx = require('rx');

var $http = require('../../../tools/http/http');
var $sign = require('../../../tools/sign/sign');
var OKCoin = require('../../../config/okcoin.json');

/*
买入BTC
*/
var TradeBtcUrl = OKCoin.base + '/trade.do';
var TradeBtcParameter = {
    api_key: OKCoin.api_key,
    symbol: 'btc_cny'
}
module.exports =  function (price, amount,type) {
    TradeBtcParameter.price = price;
    TradeBtcParameter.amount = amount ? amount : 0.1;
    TradeBtcParameter.type = type;

    var TradeBtcConfig = {
        url: TradeBtcUrl,
        methods: 'post',
        data: $sign(TradeBtcParameter, OKCoin.secretKey)
    };
    return $http(TradeBtcConfig);
}
