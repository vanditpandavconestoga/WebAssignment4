const express = require("express");
const bodyParser = require("body-parser");
require("./Database/connection");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const commentRoutes = require("./Routes/commentRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", commentRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);

// listening on specific port
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
