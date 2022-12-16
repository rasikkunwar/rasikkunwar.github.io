const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    res.send(`Welcome ${name} Age: ${age}` );
});
app.listen(3000);