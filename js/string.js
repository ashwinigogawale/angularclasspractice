var str="hello word!this is ashwini hi ashwini";
var index=str.indexOf("ashwini");
if (index >-1){
    console.log("found");

}else
console.log("not found");
console.log(str.indexOf("ashwini",'6'));

console.log(str.lastIndexOf("ashwini"));
console.log(str.slice(4,26));

console.log(str.slice(0,-10));

console.log(str.substring(18,26));

console.log(str.substr("26","11"));

console.log(str.split(""));

console.log(str.replace("ashwini","mayur"));

str1=(str.concat("kad"));
console.log(str1);
console.log(str.toUpperCase());

