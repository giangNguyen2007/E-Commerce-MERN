const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const authRoute = require('./routes/route_auth');
const userRoute = require('./routes/route_user');
const productRoute = require('./routes/route_product');
const stripeRoute = require('./routes/route_stripe');
const orderRoute = require('./routes/route_order');
const cartRoute = require('./routes/route_cart');

// require('dotenv').config();

const app = express();


//middleware
app.use(cors({
    origin:"http://localhost:3000"
}))

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method, req.body)
    next()
})


app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/checkout', stripeRoute);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connect sucessfully to MongoDB")
        // listen for request
        app.listen(process.env.PORT, ()=>{
        console.log('listening on port ', process.env.PORT)
})
    })
    .catch((e) => {
        console.log(e)
    })

