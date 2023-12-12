import express from "express";
import * as apiController from "./controllers.js";

// handles incoming requests and sending responses back

export const bookmarkdRouter = express.Router();

bookmarkdRouter.get("/all", apiController.getAllUsers);
bookmarkdRouter.get("/user", apiController.getSpecificUser)


/* 
bookmarkdRouter.get("/", apiController.getRandomBottles);
bookmarkdRouter.get("/id/", apiController.getBottleById);

bookmarkdRouter.post("/", apiController.createBottle);

bookmarkdRouter.patch("/update/", apiController.updateBottleScore);

bookmarkdRouter.delete("/:id", apiController.deleteBottle);

 */