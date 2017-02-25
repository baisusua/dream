var md5 = require('md5');

module.exports = function(obj,secretKey){
    var parmasName = [];
    var str;
    for(var item in obj){
        parmasName.push(item);
    }
    parmasName.sort();
    for(var i=0;i<parmasName.length;i++){
        parmasName[i] = parmasName[i]+'='+obj[parmasName[i]];
    }
    str = parmasName.join('&')+'&secret_key='+secretKey;
    obj.sign = (md5(str)).toLocaleUpperCase();
    return obj;
}