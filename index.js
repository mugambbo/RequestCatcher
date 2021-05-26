import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.route.js";

dotenv.config();

// Create Express server
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(routes);

const port = process.env.PORT || 3000;
const address = process.env.SERVER_ADDRESS || '127.0.0.1';


app.listen( port, address, async () => {
    console.log(`Server running on https://${address}:${port}`);
});

export default app;