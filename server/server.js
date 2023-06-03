//dependencies

const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

//configuration and middleware of express server
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONTROLLERS
const booksController = require("./controllers/books_controller");
app.use("/api/books", booksController);

//listen
app.listen(4005, () => {
	console.log("Server is listening on port 4005");
});
