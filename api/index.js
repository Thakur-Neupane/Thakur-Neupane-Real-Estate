import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRoute.js";
import listingRouter from "./routes/listingRoute.js";
import { connectDb } from "./config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 8001;

// Database connection
connectDb();

// Middleware setup

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Serve static files
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server is live",
  });
});

// 404 Handler
app.use((req, res, next) => {
  const err = new Error("404 Page not found");
  err.statusCode = 404;
  next(err);
});

// Error Handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500);
  res.json({
    status: "error",
    message: error.message,
  });
});

// Start server
app.listen(PORT, (error) => {
  if (error) {
    console.log("Server Error:", error);
  } else {
    console.log(`Server running at http://localhost:${PORT}`);
  }
});
