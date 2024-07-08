const express = require("express");
const cors = require("cors");
const { sequelize, database } = require("./config/dbconfig");
// const { swaggerUi, swaggerSpec } = require("./config/swaggerconfig");
// const authRoutes = require("./Routes/authRoutes");
const orderRoutes = require("./Routes/oredreRoutes");
const reviewRoutes = require("./Routes/reviewRoutes");
const { errorHandler } = require("./middlerwares/errormiddelerwares");

const app = express();
app.use(cors());
app.use(express.json());
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);
app.use("/reviews", reviewRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });

app.listen(PORT, async () => {
  try {
    await database(process.env.MONGO_URI);
    console.log("server running at port 3000");
  } catch (err) {
    console.log(err);
  }
});
