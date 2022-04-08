import express from "express";
import morgan from "morgan";
import routes from "./routes/routes.index.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use(morgan("dev"));

app.use(routes);

export default app;
