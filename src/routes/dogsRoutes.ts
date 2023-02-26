import { Router } from "express";
import {
  getDoggo,
  updateDoggo,
  deleteDoggo,
  getAllDoggos,
  addDoggo,
} from "../controllers/dogsController";

const dogsRouter = Router();

// * GET ALL
dogsRouter.get("/", (req, res) => {
  res.send(getAllDoggos());
});

// * GET 1
dogsRouter.get("/:id", (req, res) => {
  const realId = +req.params || 1;

  res.send(getDoggo(realId));
});

// * POST
dogsRouter.post("/", (req, res) => {
  const realName = req.body.name || "no-name";

  res.send(addDoggo(realName));
});

// * PUT
dogsRouter.put("/:id", (req, res) => {
  const realId = +req.params || 1;
  const realName = req.body.name || "no-name";

  res.send(updateDoggo(realId, realName));
});

// * DELETE
dogsRouter.delete("/:id", (req, res) => {
  const realId = +req.params || 1;

  res.send(deleteDoggo(realId));
});

export default dogsRouter;
