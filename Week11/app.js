require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const port = process.env.PORT || 8050;
const cors = require('cors');
const swaggerAutoGen = require('swagger-autogen')
const swaggerUi = require('swagger-ui-express')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);
app.use(errorHandler);

const swagger = {
    info: {
        title: 'HOMEWORK - Week 11_Unit Testing & Development',
        description: 'Nama : Raie Aswajjillah\nKelas : FSWD05B\nKelompok : 1\n\nIni adalah dokentasi dari cara menggunakan aplikasi TodoAPI pada tahap development, untuk cara install, mengubah dan melakukan Unit Testing klik [disini](https://github.com/RaiA133/TugasRakamin/tree/master/Week11), untuk melihat dokentasi dari cara penginstalan hingga unit testing'
    }
}

if (process.env.NODE_ENV != "test") {
    app.listen(port, () => {
        console.log(`\n\tListening on http://localhost:${port}\n`)
    });
}

module.exports = app; 