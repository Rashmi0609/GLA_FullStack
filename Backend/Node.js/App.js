let math=require('./math.js');
console.log(math.pi);
console.log(math.sum(5,10));
console.log(math.product(5,10));

let {pi,sum,product}=require('./math.js');
console.log(pi);
console.log(sum(3,6));
console.log(product(13,36));