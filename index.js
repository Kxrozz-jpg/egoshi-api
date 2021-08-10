const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = 5000 || 3000;

const cors = require("cors");
app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes/img.routes"));
app.use(require("./routes/routes.js"));
app.use(express.static("./"));
app.use(morgan("dev"));

app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
