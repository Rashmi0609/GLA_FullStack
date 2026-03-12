let {URL} =require('url');
let url=new URL("https://localhost:3000/path/test?username='abc'&id=1221#contact");
console.log(url.protocol); //https:
console.log(url.host); //localhost:3000
console.log(url.pathname); // /path/test
console.log(url.port); //3000
console.log(url.search); //?username='abc'&id=1221
console.log(url.hash); //#contact
console.log(url.searchParams.get('username')); //abc
console.log(url.searchParams.get('id')); //1221
console.log(url.href); //https://localhost:3000/path/test?username='abc'&id=1221#contact

let url1=new URL("http://example.com:8080/path/login?name='pqr'&#about");
console.log(url1.protocol); //http: 
console.log(url1.host); //example.com:8080
console.log(url1.pathname); // /path/login
console.log(url1.port); //8080
console.log(url1.search); //?name='pqr'
console.log(url1.hash); //#about  
console.log(url1.searchParams.get('name')); //pqr
console.log(url1.href); //http://example.com:8080/path/login?name='pqr'&#about
