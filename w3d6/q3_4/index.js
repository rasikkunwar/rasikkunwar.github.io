const express = require('express');
const { appendFile } = require('fs');
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));
app.use('/stylesheet', express.static(path.join(__dirname, 'public', 'css')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

const products = [{
    'id': 1,
    'name': 'Apple',
    'price': '$3.00',
    'description': 'Apple for breakfast'
},
{
    'id': 2,
    'name': 'Water Boiler',
    'price': '$20.00',
    'description': 'Water Boiler to boil the water and to make a tea'
},
{
    'id': 3,
    'name': 'Coke',
    'price': '$3.00',
    'description': 'Cold drinks'
},
{
    'id': 4,
    'name': 'T-shirt',
    'price': '$8.00',
    'description': 'Cotton lightweight T-shird'
}
]
app.get('/', (req, res) => {
    res.render('product', { productLists: products });
});

app.get('/product/:id', (req, res) => {
    const paramData = req.params.id;
    let p = products.filter(el=>el.id === parseInt(paramData) || el.name === paramData || el.description === paramData)
    res.render('product', { productLists: p });
});

app.get('/shoppingCart', (req, res) => {
    const shoppingCartLists = [{
        'name': 'Apple',
        'price': '$3.00',
        'quantity': '12 piece'
    },
    {
        'name': 'Water Boiler',
        'price': '$20.00',
        'quantity': '1 piece'
    },
    {
        'name': 'Coke',
        'price': '$3.00',
        'quantity': '12 piece'
    }
    ]
    res.render('shopping_cart', {cartLists: shoppingCartLists});
});

app.listen(3000, () => {
    console.log("App running on port 3000");
})