var $logger = require('../tools/logs/logHelper');
var orderModelStream = require('../service/models/order/order');
var getUserInfoStream = require('../service/OKCoin/inquire/user_info');
var getOrderInfoStream = require('../service/OKCoin/inquire/order_history');

/*
1、查询是否有等待卖出的订单
2、没有（直接查询余额是否满足买入标准,写入account表）
3、有（查询订单是否交易成功，交易成功更改订单状态）
4、下单买入
5、写入记录
*/

var InquireOrderConfig = {
    where: {
        status: '等待卖出'
    },
    attributes: ['order', 'price']
}
var startInquireOrderStream = orderModelStream.select(InquireOrderConfig).map((res) => {
    var config = {
        data: '',
        type: ''
    }
    if (res) {
        /*
        查询订单是否交易成功
        */
        config.type = false;
        config.data = res.dataValues.order;

    } else {
        /*
        查询余额是否满足买入标准
        */
        config.type = true;
    }
    return config;

}).flatMap((config) => {
    if(config.type){
        // 查询余额直接交易
        return getUserInfoStream;
    }
    // 查询订单状态后修改数据库状态
    return getOrderInfoStream.InquireOrderInfo(8460352314);
})
.subscribe((res) => {
    console.log(res);
}, function (error) {
    console.log(error);
});