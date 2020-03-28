var names = ["Ben", "kyel", "Ezekiel"];
var scores = [40, 20, 100];

var text=names.map(function(itm,i){
   return [itm,scores[i]];
}).join('<br>');

console.log(names, scores)
