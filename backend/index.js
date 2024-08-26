import express from "express";

import { ENV_VARS } from "./config/envVars.js";
import connectDB from "./config/connectionDb.js";
import passport from "passport";
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import "./config/passport.js";
import { protectRoute } from "./middleware/protectRoute.js";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

const app = express();

const mongoStore = MongoStore.create({
  mongoUrl: ENV_VARS.MONGO_LOCALDB, // Use the same database name
  collectionName: "sessions", // Optional: Customize session collection name
});

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: mongoStore, // Use MongoDB store
    cookie: {
      secure: false, // Set to `true` if using HTTPS
      httpOnly: false,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 day
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);
app.use("/api/v1/search",protectRoute, searchRoutes);

app.listen(ENV_VARS.PORT, () => {
  console.log(`Server started at http://localhost:${ENV_VARS.PORT}`);
  connectDB();
});



