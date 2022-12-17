const express = require('express');
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/result', (req, res) => {
    const { name, age } = req.body;
    res.render('result',{name:name,age:age})
});

app.listen(3000, () => {
    console.log("App running on port 3000");
})