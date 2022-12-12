require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const appRoutes = require("./routes/routes");

const notFoundMiddleware = require("./middleware/not-found");

app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.use("/", appRoutes);

app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
