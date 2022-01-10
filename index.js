const express = require('express');
const app = express();
const logger = require("./config/logger");

require('dotenv').config();
const port = process.env.port;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    // log in info file
    logger.info(`Your Port ${port} is Runnning successfuly...`);

    // log in error file
    logger.error(`Your Port ${port} is Runnning successfuly...`);
});