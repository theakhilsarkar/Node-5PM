import express from "express";
import {
  addBook,
  deleteBook,
  getBooks,
  testing,
  updateBook,
} from "../controllers/bookController.js";
import { checkTime } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.put("/", updateBook);
router.delete("/", deleteBook);

// router.get("/test/:id", testing);
router.get("/test/:action", testing); // url params - single value get from client
// mostly used in update and delete
// req.params.action

router.get("/test", testing);

export default router;
