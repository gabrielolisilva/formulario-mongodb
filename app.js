const express = require("express");
const app = express();
const path = require("path");

const appRoutes = require("./routes/routes");

const notFoundMiddleware = require("./middleware/not-found");

app.use(express.static("public"));

const port = 3000;

app.use("/", appRoutes);
app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
