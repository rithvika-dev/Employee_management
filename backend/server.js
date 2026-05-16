import exp from "express";
import { connect } from "mongoose";
import { empApp } from "./API/EmployeeAPI.js";   
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = exp();
// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app"
    ],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
  })
);

// body parser
app.use(exp.json());

// your route
app.use("/emp-api", empApp);

// DB connection
const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/abcddb");
    console.log("DB connected");
    app.listen(5000, () => console.log("server listening on port 5000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

// error handler
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({ message: "error", reason: err.message,});
});