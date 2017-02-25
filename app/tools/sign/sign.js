var md5 = require('md5');

module.exports = function(obj,secretKey){
    var ParameterName = [];
    var str;
    ParameterName = [Object.keys(obj)].sort();
    for(var i=0;i<ParameterName.length;i++){
        ParameterName[i] = ParameterName[i]+'='+obj[ParameterName[i]];
    }
    str = ParameterName.join('&')+'&secret_key='+secretKey;
    obj.sign = (md5(str)).toLocaleUpperCase();
    return obj;
}