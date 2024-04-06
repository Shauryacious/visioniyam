const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//! ROUTERS
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

const corsOption = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
};

app.use(cors(corsOption));
app.use(express.json());

//! ROUTES
app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;