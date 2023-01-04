import {
  createUserController,
  deleteUserController,
  findOneUserController,
  updateUserController,
  userListcontroller,
} from "@controllers/users.controller";
import { Router } from "express";

export const usersRouter = Router();

usersRouter.post("", createUserController);
usersRouter.patch("/:id", updateUserController);
usersRouter.get("/:id", findOneUserController);
usersRouter.get("", userListcontroller);
usersRouter.patch("/delete/:id", deleteUserController);
