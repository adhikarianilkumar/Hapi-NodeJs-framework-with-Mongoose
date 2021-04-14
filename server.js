"use strict";

const Hapi = require("@hapi/hapi");
const inert = require("@hapi/inert");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const laabr = require("laabr");

const connectDB = require("./config/databaseConnection");
const userRoutes = require("./routes/userRoute");
const testRoutes = require("./routes/testRoute");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5001;

const server = new Hapi.server({
  port: PORT,
  host: "localhost",
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Accept", "Content-Type"],
      additionalHeaders: ["X-Requested-With"],
    },
  },
});

server.route([...userRoutes, ...testRoutes]);

(async () => {
  try {
    // laabr
    if (process.env.NODE_ENV === "development") {
      await server.register({
        plugin: laabr,
        options: {
          formats: { onPostStart: ":time :start :level :message" },
          tokens: { start: () => "[start]" },
          indent: 0,
        },
      });
    }

    // inert provides new handler methods for serving static files and directories
    await server.register(inert);

    // Database connection
    await connectDB();

    // Start server
    await server.start();
    console.log(
      `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    );
  } catch (err) {
    console.error(err);
  }
})();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
