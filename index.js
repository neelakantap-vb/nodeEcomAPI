const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const db = mongoose.connection;

const userRouter = require('./routes/userRoutes');
const roleRouter = require('./routes/roleRoutes');
const tagRouter = require('./routes/tagRoutes');
const cartRouter = require('./routes/cartRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const orderRouter = require('./routes/orderRoutes');
const productRouter = require('./routes/productRoutes');
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.use(userRouter);
app.use(roleRouter);
app.use(tagRouter);
app.use(cartRouter);
app.use(categoryRouter);
app.use(orderRouter);
app.use(productRouter);
app.listen(port, () => {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/E_commerce-ne");
        db.on("error", () => console.log(`Database connection error`));
        db.once("open", () => console.log("MongoDB connected."));
    } catch (error) {
        console.log("Something went wrong!");
    }
    console.log(`Example app listening on ${port} port!`)
});