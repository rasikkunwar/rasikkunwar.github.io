const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use("/stylesheet",express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >=6 && hour < 18 ? '/stylesheet/css/day.css' : 'stylesheet/css/night.css'
    res.render("index", {
        time: date.toTimeString(),
        cssFile:cssFile
    });
});
app.listen(3000);