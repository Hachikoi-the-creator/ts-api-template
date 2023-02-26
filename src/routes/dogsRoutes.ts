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
  try {
    res.status(200).send(getAllDoggos());
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad request");
  }
});

// * GET 1
dogsRouter.get("/:id", (req, res) => {
  try {
    res.status(200).send(getDoggo(req.params.id));
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad request");
  }
});

// * POST
dogsRouter.post("/", (req, res) => {
  try {
    res.status(201).send(addDoggo(req.body.name));
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad request");
  }
});

// * PUT
dogsRouter.put("/:id", (req, res) => {
  try {
    res.status(200).send(updateDoggo(req.params.id, req.body.name));
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad request");
  }
});

// * DELETE
dogsRouter.delete("/:id", (req, res) => {
  try {
    res.status(200).send(deleteDoggo(req.params.id));
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad request");
  }
});

export default dogsRouter;
