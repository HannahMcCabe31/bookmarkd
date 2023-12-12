import express from "express";
import morgan from "morgan";
import { bookmarkdRouter } from "./data/router.js";
import cors from "cors";

const app = express();

app.use(cors({
        origin: '*' // Actually secure this at some point
    }));

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/", bookmarkdRouter);

export default app;

