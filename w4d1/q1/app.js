const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.get('/', (req, res) => {
    res.render("index",{cookies:req.cookies});
});
app.post('/addCookie',(req,res) => {
    const {key,value} = req.body;
    res.cookie(key,value);
    res.redirect('/');
})
app.listen(3000);