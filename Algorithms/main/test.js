var List = require("collections/list");
var list = new List([1, 2, 3]);
list.splice(1, 1, 6, 5);

console.log(list.toArray());
