var getUserInfoStream = require('./service/OKCoin/inquire/user_info');
var accountModelStream = require('./service/models/account/account');

var startUserInfoStream = getUserInfoStream.filter((res) => {
    return res.result;
}).map((res) => {
    var config = {
        name: 'Kround',
        cost: 5000,
        balance: res.info.funds.free.btc,
        funds: res.info.funds.asset.net,
        total: res.info.funds.asset.total,
        profit: 424
    }
    return config;
}).flatMap((config) => {
  return accountModelStream.add(config);
}).subscribe((res) => {
    console.log("sss");
    console.log(res);
}, function (error) {
    console.log(error);
});

