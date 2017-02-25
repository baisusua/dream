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
}
var InquireLastPrice = $http(InquireLastPriceConfig);

/*
查询用户信息
*/
var InquireUserInfoUrl = OKCoin.base + '/userinfo.do';
var InquireUserInfoParameter = {
    api_key:OKCoin.api_key
}
var InquireUserInfoConfig = {
    url:InquireUserInfoUrl,
    methods:'post',
    data:$sign(InquireUserInfoParameter,OKCoin.secretKey)
}
var InquireUserInfo = $http(InquireUserInfoConfig)


module.exports = {
    InquireLastPrice:InquireLastPrice,
    InquireUserInfo:InquireUserInfo
};