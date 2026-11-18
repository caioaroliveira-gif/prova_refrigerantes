import Router from "express";
import { refriController } from "../controller/refrigerante.controller.js";

export const RefriRouter = Router();

RefriRouter.post("/", refriController.create)
RefriRouter.get("/", refriController.getAll)
RefriRouter.get("/:id", refriController.getById)
RefriRouter.patch("/", refriController.update)
RefriRouter.delete("/", refriController.delete)
