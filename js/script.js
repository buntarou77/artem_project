"use strict";
const shops = [
    {rise: 500},
    {oil: 200},
    {bread:50}
];

const budget = [5000, 15000,25000];
const neww = new map(Object.entries(user));

const newUserObject = Object.fromEntries(userMap);
const map = new Map([
    [{paper: 400}, 8000]
]);
shops.forEach((shop, i)=>{
    map.set(shop, budget[i] )
})
/*
console.log(map);
console.log(map.has(shops[0]));
map.delete(key);
map.clear();
map.size();
console.log(map.keys())
const goods = [];
for(let shop of map.keys()){
    goods.push(Object.keys(shop)[0])
}
console.log(goods);

for(let price of map.values()){
console.log(price)
}

for(let [shop, price] of map.entries()){
    console.log(shop,price)
    }
*/
map.forEach((value, key, map) =>{
    console.log(key, value)
})

function pan(string) {
    let abc = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let arr = abc.split(' ')
    let str = string.toLowerCase();
for(let i = 0; i < str.length; i++){
arr.forEach((item) =>{
if(str[i] == item){
    let del = arr.indexOf(item);
    arr.splice(del, 1);
}
})
}


        return true ? arr.length == 0 : false;
    }
 pan("Tq")