var qstring = require('querystring');
var params = qstring.parse("name=Brad&color=red&color=blue&color=green&width=300");
console.log(params);
paramsString = qstring.stringify(params);
console.log(paramsString);
