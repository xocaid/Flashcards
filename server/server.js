import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

import db from "./db/db-connection.js";
import jsRouter from './routes/javascript.js';

const app = express();
const PORT = 8082;

app.use(cors());
app.use(bodyParser.json());
app.use('/javascript', (jsRouter));

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}.`));