var Rx = require('rx');
var RxNode = require('rx-node');

var $http = require('../../../tools/http/http');
var api = require('../../../config/okcoin.json').base + '/ticker.do';

var InquireLastPriceConfig = {
    url:api
}
var InquireLastPrice = $http(InquireLastPriceConfig).subscribe((res) => {console.log(res);}, function (error) {
			console.log(error);
		});