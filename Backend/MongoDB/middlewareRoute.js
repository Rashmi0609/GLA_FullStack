let express = require('express');
let app = express();
let router = express.Router();

router.use((req, res, next) => {
    console.log("date: " + Date.now());
    next();
});

router.use('/user/:id', 
    (req, res, next) => {
        console.log("route:", req.url);
        next();
    }, 
    (req, res, next) => {
        console.log("method:", req.method);
        next();
    },
    (req, res) => {
        res.send("User route working"); 
    }
);

app.use('/', router);

app.listen(3000, () => {
    console.log('server is running at port 3000');
});