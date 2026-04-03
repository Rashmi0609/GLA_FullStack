let express = require('express');
let app = express();

app.use((req, res, next) => {
        console.log('First middleware');
        next();
});

app.get('/', (req, res, next) => {
    res.send('this is / route');
    console.log('First middleware');
    // next();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});