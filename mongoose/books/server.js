import express from "express";
import connectDB from "./config/db.js";
import routes from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json()); // middleware -> its validate request before sending to the server.
app.use(cors());

// 5173, 5000

connectDB(); // connect server with database - database start/on

app.use("/api/book",routes);

app.listen(5000, () => {
  console.log("server started successfully !!");
});
