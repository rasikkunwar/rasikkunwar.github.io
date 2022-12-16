const express = require('express');
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
    <form method="post" action="/result">
 <label for="name">Name</label>
 <input type="text" id="name" name="name">
 <label for="age">Age</label>
 <input type="text" id="age" name="age">
 <input type="submit" value="Submit Query">
</form>
    `);
});

app.post('/result', (req, res) => {
    const { name, age } = req.body;

    res.send(`Welcome ${name} Age: ${age}`);

});

app.listen(3000, () => {
    console.log("App running on port 3000");
})