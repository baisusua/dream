var Rx = require('rx');

var $http = require('../../../tools/http/http');
var $sign = require('../../../tools/sign/sign');
var OKCoin = require('../../../config/okcoin.json');

/*
查询单个订单信息
*/
var InquireOrderInfoUrl = OKCoin.base + '/order_info.do';

var InquireOrderInfoParameter = {
    api_key: OKCoin.api_key,
    symbol: 'btc_cny'
}
function InquireOrderInfo (order_id) {
    InquireOrderInfoParameter.order_id = order_id;

    var TInquireOrderInfoConfig = {
        url: InquireOrderInfoUrl,
        methods: 'post',
        data: $sign(InquireOrderInfoParameter, OKCoin.secretKey)
    };
    return $http(TInquireOrderInfoConfig);
}

/*
获取历史订单信息（最近两天）
*/
var InquireOrderHistoryUrl = OKCoin.base + '/order_history.do';

var InquireOrderHistoryParameter = {
    api_key: OKCoin.api_key,
    symbol: 'btc_cny'
}
function InquireOrderHistory (status,current_page,page_length) {
    InquireOrderHistoryParameter.status = status?status:1;
    InquireOrderHistoryParameter.current_page = current_page?current_page:1;
    InquireOrderHistoryParameter.page_length = page_length?page_length:50;

    var TInquireOrderHistoryConfig = {
        url: InquireOrderHistoryUrl,
        methods: 'post',
        data: $sign(InquireOrderHistoryParameter, OKCoin.secretKey)
    };
    return $http(TInquireOrderHistoryConfig);
}

module.exports = {
    InquireOrderInfo:InquireOrderInfo,
    InquireOrderHistory:InquireOrderHistory
}