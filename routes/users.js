import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controlllers/users.js";

const router = express.Router();

// Storing all the Users in an Array
let users = [];

// All the routes are starting from /users
router.get("/", getUsers);

// Create a new data in the users
router.post("/", createUser);

// Getting user with id
router.get("/:id", getUser);

// Deleting User with id
router.delete("/:id", deleteUser);

// Updating the details
router.patch("/:id", updateUser);

export { router, users };
