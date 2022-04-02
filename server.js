const express = require("express");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", require("./src/hotels_routes"));

app.get("*", (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, async function () {
	await sequelize.sync();
	await sequelize.authenticate();
	console.log("the server started at port ", port);
});
