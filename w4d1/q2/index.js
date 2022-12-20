const express = require('express');
const app = express();
const path = require("path");
const session = require('express-session');
app.use(session({
    secret: 'clever monkey',
}))
app.use(express.urlencoded({ extended: false }));
const date = new Date();
const hour = date.getHours();
app.use('/css', express.static(path.join(__dirname, 'css')));
let cssLink;
if (hour >= 6 && hour < 18) {
    cssLink = `<link rel="stylesheet" href="./css/day.css"></link>`
}
else {
    cssLink = `<link rel="stylesheet" href="./css/night.css"></link>`
}
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${cssLink}
    <title>Form</title>
</head>
<body>
    <form method="post" action="/result">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
       
        <label for="age">Age</label>
        <input type="text" id="age" name="age">
        <input type="submit" value="Submit Query">
       </form>
</body>
</html>

    `)
});

app.post('/result', (req, res) => {
    const { name, age } = req.body;
    req.session.name = name;
    req.session.age = age;
    res.redirect(`/output`);

});

app.get('/output', (req, res) => {
    const { name, age } = req.session;
    res.send(`Welcome ${name} Age: ${age}`);
})

app.listen(3000, () => {
    console.log("App running on port 3000");
})