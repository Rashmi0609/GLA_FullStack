let express = require('express');
let app = express();
let path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let Products = [
    { Pname: "Phone", P_id: 111, P_price: 10000, url: "https://darlingretail.com/cdn/shop/files/iPhone_15_Pink_Pure_Back_iPhone_15_Pink_Pure_Front_2up_Screen__WWEN_cfd96ace-df87-4ab3-a96a-e8e9b13bb7b9_800x.jpg?v=1695104022" },
    { Pname: "Laptop", P_id: 112, P_price: 50000, url: "https://media.wired.com/photos/68a379057f0a507da2040dfa/master/w_1600%2Cc_limit/%2520Dell%252014%2520Premium%25207%2520Source%2520Luke%2520Larsen.png" },
    { Pname: "Tablet", P_id: 113, P_price: 20000, url: "https://5.imimg.com/data5/SELLER/Default/2023/12/372325508/ZZ/TZ/XX/180833002/tab-m10-25-65cms-10-1-4gb-64gb-storm-grey.png" }
];

app.get('/products', (req, res) => {
    res.render("products", {Products});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});