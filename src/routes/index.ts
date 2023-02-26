import { Router } from "express";
import dogsRouter from "./dogsRoutes";

const mainRouter = Router();

mainRouter.get("/check", (req, res) => {
  res.status(200).send("WORKING :D");
});

mainRouter.use("/dogs", dogsRouter);

export default mainRouter;
