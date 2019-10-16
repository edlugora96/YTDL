const path = require("path");
const express = require("express");
const chalk = require("chalk");
const helmet = require("helmet");
const cors = require("cors");
const { ytdlApi } = require("gora-api");
const {
  middlewares: {
    notFoundHandler,
    errorHandler: { logErrors, errorHandler, wrapErrors }
  }
} = require("gora-utils");

const config = require("config")();

const corsOptions = {
  origin: config.cors
};

const app = express();

// Security
app.use(cors(corsOptions));
app.use(helmet());

// body parser
app.use(express.json());

app.use("/media", express.static(path.resolve("./uploads")));

// Loading APIs
ytdlApi(app);

app.get("/", (req, res) => {
  res.json({ Edlu: "Gora" });
});

// Catch 404
app.use(notFoundHandler);

// Error Handler middleware
// eslint-disable-next-line
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, config.host, () => {
  // eslint-disable-next-line
  console.log(
    `${chalk.blueBright("[server On]:")} Listening http://${config.host}:${
      config.port
    }`
  );
});
const handleFatalError = error => {
  // eslint-disable-next-line
  console.error(`${chalk.redBright("[Fatal Error]:")} ${error.message}`);
  if (config.env) {
    // eslint-disable-next-line
    console.error(error.stack);
  }
  process.exit(1);
};
process.on("uncaughtException", handleFatalError);
process.on("unhandledRejection", handleFatalError);
