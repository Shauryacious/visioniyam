const express = require("express");
const dotenv = require("dotenv");

//! ROUTERS
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.use(express.json());

//! ROUTES
app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;