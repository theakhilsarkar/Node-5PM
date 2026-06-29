import express from "express";

const app = express();

app.use(express.json());

const printLog = (req, res, next) => {
  const date = new Date();
  if (date.getHours() > 17) {
    next();
  } else {
    res.json({ message: "Website will open after 10 am" });
  }
};

app.use("/", (req, res) => {
  res.json({ message: "request comes !!" });
});


app.listen(5000, () => {
  console.log("server started successfully !");
});
