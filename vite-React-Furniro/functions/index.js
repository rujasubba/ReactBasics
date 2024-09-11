const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    'sk_test_51Pu8FnFz6ADdRgO2fNyh2pPZ8BIw6F1dkaAD0BBRX7cCy08WQvSyhypUtEPop3m1gETYMX5p2RoLmpS1PCJdIv1e008GU9Z8t2'
)

const app = express();

app.use(cors({
    origin: ['http://localhost:5173'], 
    methods: ['GET', 'POST'] }))
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Hello'));

app.post('/payments/create', async(req, res) => {
    const total = req.query.total;

    console.log('Payment request received for amount', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'aud'
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/furniro-furniture/us-central1/api/
