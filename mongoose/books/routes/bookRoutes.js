import express from "express";
import {
  addBook,
  deleteBook,
  getBooks,
  testing,
  updateBook,
} from "../controllers/bookController.js";
import { signin, signup } from "../controllers/userController.js";
import { checkTime } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.put("/", updateBook);
router.delete("/", deleteBook);

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
