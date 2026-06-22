import express from "express";
import { addBook, getBooks } from "../controllers/bookController.js";

const router = express.Router();

// route -> route is the way to enter into server.
// www.localhost.com/

router.post("/", addBook);
router.get("/", getBooks);

export default router;
