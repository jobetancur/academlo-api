const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const products = [
    { id: 1, name: 'Academlo - Camisa negra o roja, Logo blanco V5', price: 13.00, images: {image1: 'https://img.represent.com/uploads/508fac129304831cbeb4b2798e63a368.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/508fac129304831cbeb4b2798e63a368.jpeg?w=750&q=95&auto=format'} },

    { id: 2, name: 'Academlo - Hoodie roja o negra, Logo blanco V7', price: 24.00, images: {image1: 'https://img.represent.com/uploads/97cc04c33fb623827703747d01496782.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/9d40aab8d782cf940b4c6c39e54a5158.jpeg?w=750&q=95&auto=format'} },

    { id: 3, name: 'Academlo - Sudadera blanca o gris, Logo negro V5', price: 14.00, images: {image1: 'https://img.represent.com/uploads/508fac129304831cbeb4b2798e63a368.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/508fac129304831cbeb4b2798e63a368.jpeg?w=750&q=95&auto=format'} },

    { id: 4, name: 'Academlo - Camisa blanca o gris, Logo rojo V7', price: 13.00, images: {image1: 'https://img.represent.com/uploads/b304b89f7f2b0e3cdb3673179306b939.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/5438db111349ed8b95c4ffbfbccb2014.jpeg?w=750&q=95&auto=format'} },

    { id: 5, name: 'Academlo - Hoodie negra o roja, Logo blanco V6', price: 24.00, images: {image1: 'https://img.represent.com/uploads/46ac9d39acbd33cee2aadd5b6c230dc0.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/a955c569f3698124ef79471b10baea4d.jpeg?w=750&q=95&auto=format'} },

    { id: 6, name: 'Academlo - Sudadera blanca o gris, Logo rojo V3', price: 14.00, images: {image1: 'https://img.represent.com/uploads/743257c21cea30fa4a39378d32545bf6.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/75ed22f05d4f4546d8e0c880e004da59.jpeg?w=750&q=95&auto=format'} },

    { id: 7, name: 'Academlo - Camisa roja o negra, Logo blanco V3', price: 13.00, images: {image1: 'https://img.represent.com/uploads/e33ba02f02bf3f18ba5e0db1a424ba56.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/bebcd33771d1442a1eb99e2e72978bf4.jpeg?w=750&q=95&auto=format'} },

    { id: 8, name: 'Academlo - Hoodie blanca o gris, Logo rojo V7', price: 24.00, images: {image1: 'https://img.represent.com/uploads/535666bf499a0c508ace882bb0420436.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/706d25495392eef920b16c4f4d859f24.jpeg?w=750&q=95&auto=format'} },

    { id: 9, name: 'Academlo - Sudadera negra o roja, Logo blanco V6', price: 14.00, images: {image1: 'https://img.represent.com/uploads/ee4a165cfdce4d17714bf8a39211746b.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/a1bf3e7895bd8bb596065a75b1d06cd5.jpeg?w=750&q=95&auto=format'} },

    { id: 10, name: 'Academlo - Camisa blanca o gris, Logo rojo V2', price: 13.00, images: {image1: 'https://img.represent.com/uploads/a76857819caae151f62fb58e05621acd.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/bd50fefef26786a046e932657cb38dc4.jpeg?w=750&q=95&auto=format'} },

    { id: 11, name: 'Academlo - Hoodie roja o negra, Logo blanco V3', price: 24.00, images: {image1: 'https://img.represent.com/uploads/5fcd378346281f635a2cf71dd0494613.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/3dad9bbb7ebb05375ad6af2a3b3d3f53.jpeg?w=750&q=95&auto=format'} },

    { id: 12, name: 'Academlo - Sudadera negra o roja, Logo blanco V5', price: 14.00, images: {image1: 'https://img.represent.com/uploads/ad9b3e6580cf66d28cbd90314ecdd0a6.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/323d004772249ee8e193b413efd083a1.jpeg?w=750&q=95&auto=format'} },

    { id: 13, name: 'Academlo - Camisa negra o roja, Logo blanco V5', price: 13.00, images: {image1: 'https://img.represent.com/uploads/508fac129304831cbeb4b2798e63a368.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/508fac129304831cbeb4b2798e63a368.jpeg?w=750&q=95&auto=format'} },

    { id: 14, name: 'Academlo - Camisa gris o blanca, Logo rojo V6', price: 13.00, images: {image1: 'https://img.represent.com/uploads/60d0c0fcd09e31fbc3d64b6159fcb05e.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/f2520a89e67e7eca14170563f398815d.jpeg?w=750&q=95&auto=format'} },

    { id: 15, name: 'Academlo - Hoodie negra o roja, Logo blanco V5', price: 24.00, images: {image1: 'https://img.represent.com/uploads/a1330a3c85a94ec87fbae26bb00e1cea.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/7834eec78d97437be71d7f2614a9cefe.jpeg?w=750&q=95&auto=format'} },

    { id: 16, name: 'Academlo - Sudadera roja o negra, Logo blanco V3', price: 14.00, images: {image1: 'https://img.represent.com/uploads/2534c4db86e0197092767c86aaa5d3a5.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/55160a5dcb7c93b3486566c65d2f875e.jpeg?w=750&q=95&auto=format'} },

    { id: 17, name: 'Academlo - Camisa blanca o gris, Logo negro V7', price: 13.00, images: {image1: 'https://img.represent.com/uploads/2df2b7f6be166190dcba444955e37990.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/81f7eef89f7437a138d1b661390eaf0c.jpeg?w=750&q=95&auto=format'} },

    { id: 18, name: 'Academlo - Hoodie gris o blanca, Logo rojo V6', price: 24.00, images: {image1: 'https://img.represent.com/uploads/643bd240defaf4dd23882c5310dd198a.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/29e2d3754c790fc92df56b9edacdd3fe.jpeg?w=750&q=95&auto=format'} },

    { id: 19, name: 'Academlo - Sudadera roja o negra, Logo blanco V1', price: 14.00, images: {image1: 'https://img.represent.com/uploads/7f9a4ee6f3c26e70e7252abbd8dc33de.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/4b3a90de1d114dcb1e0e68d6dc95aec0.jpeg?w=750&q=95&auto=format'} },

    { id: 20, name: 'Academlo - Camisa blanca o gris, Logo negro V5', price: 13.00, images: {image1: 'https://img.represent.com/uploads/b5f41a80ac22de1af13c5b2ea8a9e3eb.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/242df51d069845570b5fd5fe72b8abac.jpeg?w=750&q=95&auto=format'} },

    { id: 21, name: 'Academlo - Sudadera blanca o gris, Logo negro V2', price: 14.00, images: {image1: 'https://img.represent.com/uploads/d47881539d6c11652d97a334b0a7bd8d.jpeg?w=750&q=95&auto=format', image2: 'https://img.represent.com/uploads/78f99aa7a707e0f24763371132ab6668.jpeg?w=750&q=95&auto=format'} }
];

app.get('/', (rep, res) => {
    res.send ('e-Commerce Node JS API');
});

app.get('/api/products', (req, res) => {
    res.send(products);
    res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.get ('/api/products/:id', (req, res) => {
    const product = products.find(element => element.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Producto no encontrado');
    else res.send(product);
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.post('/api/products', (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: parseInt(req.body.price),
        images: req.body.images
    };
});

const port = process.env.PORT || 3000;
app.listen(port, () =>  `${port}`);