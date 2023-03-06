const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { errorHandler } = require('./middleware/errorMiddleware')
require("dotenv").config();
const app = express();

const productRoute = require("./routes/productRoute");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
//route
app.use("/api/product",productRoute)

// ถ้า เกิด Error ให้แสดงเป็น Json
app.use(errorHandler)

const port = process.env.PORT || 5502;
app.listen(port, () => console.log(`start server in port ${port}`));
