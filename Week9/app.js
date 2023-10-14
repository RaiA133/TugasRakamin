require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db/database')
const routing = require('./routes/index');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const port = process.env.PORT || 8080;
const morgan = require('morgan')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('morgan'));

app.use('/', routing);
app.use('/', (req, res) => res.status(200).json({ message: "berhasil" }))

const swaggerDefinition = {
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'Documentation for your API',
    },
    basePath: '/',
  };
  
  module.exports = {
    swaggerDefinition,
    apis: ['./routes/*'],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Sesuaikan dengan struktur proyek Anda
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// CEK KONEKSI
pool.connect((err, res) => {
    if(err) console.log(err);
    console.log(`Berhasil connect ke database`);
    app.listen(port, () => {
        console.log(`\n\tServer is running on http://localhost:${port}/\n`);
    });
})








// http://localhost:3000/auth/register
// http://localhost:3000/auth/login

// http://localhost:3000/user/data?order=DESC
// http://localhost:3000/user/data/delete/:id

// http://localhost:3000/movies/data?order=DESC
// http://localhost:3000/movies/data?order=ASC&limit=10
// http://localhost:3000/movies/data/:id
// http://localhost:3000/movies/data/post
// http://localhost:3000/movies/data/update/:id
// http://localhost:3000/movies/data/delete/:id

