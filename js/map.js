var arr=[1,2,3,4];
let arr1=arr.map((item)=>{
    return item*item;
});
console.log(arr1);
let arr2=arr.map((sum,item)=>{
    return sum+item;
});
console.log(arr2);
let arr3=arr.filter((item)=>{
    return item/2;
});
console.log(arr3);
let temp=arr.reduce((a,b)=>{
    return a+b;
});
console.log(temp);