const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(cookieParser());

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

const router = express.Router();
const userRouter = require("./routes/userRouter");
const realRouter = require("./routes/realRouter");
const tagRouter = require("./routes/tagRouter");
const tagRealRouter = require("./routes/tagRealRouter");
const mediaRouter = require("./routes/mediaRouter");
const authRouter = require("./routes/authRouter");
const superRealRouter = require("./routes/superRealRouter");

router.use("/user", userRouter);
router.use("/real", realRouter);
router.use("/tag", tagRouter);
router.use("/tagreal", tagRealRouter);
router.use("/media", mediaRouter);
router.use("/auth", authRouter);
router.use("/superReal", superRealRouter);

// API routes
app.use("/api", router);

// Redirect all requests to the REACT app
app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;
