import express from "express";
import morgan from "morgan";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.json({
    message: "aaa",
  });
});
//run the server

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
