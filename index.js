const express = require("express");
const productRouter = require("./routers/productRoute");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/products", productRouter);

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
