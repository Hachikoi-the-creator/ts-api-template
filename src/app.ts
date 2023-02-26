import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import mainRouter from "./routes";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 1313;

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
