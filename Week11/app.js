require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const port = process.env.PORT || 8050;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);
app.use(errorHandler);

if (process.env.NODE_ENV != "test") {
    app.listen(port, () => {
        console.log(`\n\tListening on http://localhost:${port}\n`)
    });
}

module.exports = app; 