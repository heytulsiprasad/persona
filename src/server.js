const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware setup
const middleware = require("./middleware/errorHandler");

// Logs every request to server in console
app.use(morgan("dev"));

// Removes unnecessary default server response and
// Adds useful secure response parameters
app.use(helmet());

// Allow Cross Origin requests
app.use(cors({ origin: "http://localhost:3000/" }));

// Routes setup
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.get("/json", (req, res) => {
	res.json({ title: "The Life of Pi", comments: "Best book ever" });
});

// Adding route middlewares
app.use(middleware.notFound);
app.use(middleware.errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
