import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import connectDB from "./Config/DB.js";
import CardRouter from "./route/cardRoute.js";
configDotenv();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/cards", CardRouter),
  connectDB()
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });
