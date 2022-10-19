import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import db from "./db/db-connection.js";
import jsRouter from './routes/js.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/js', (jsRouter));

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}.`));