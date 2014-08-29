var accountStr = '{"name":"Jedi", "members":["Yoda","Obi Wan"],\
"number":34512,"location": "A galaxy far, far away"}';
var accountObj = JSON.parse(accountStr);
console.log(accountStr);
console.log(accountObj.name);
console.log(accountObj.members);
console.log(accountObj.location);

var accountObj = {
  name: "Baggins",
  number:10645,
  members: ["Frodo, Bilbo"],
  location: "Shire"
};
console.log(accountObj);
var accountStr = JSON.stringify(accountObj);
console.log(accountStr);