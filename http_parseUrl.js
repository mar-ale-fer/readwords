var url = require('url');
var urlStr =  'http://google.com'; //'http://maf:123456@10.3.4.20:8080/mantis/view.php?id=52708'
var urlObj = url.parse(urlStr,true, false) // url, <parseQueryString>,<slashesDenoteHost
var urlString = url.format(urlObj);
console.log(urlObj);
console.log(urlString);

//resolving the URL components
var newResource = '/mantisxxx/view2.php?id=52708'
console.log(url.resolve(urlStr, newResource));
