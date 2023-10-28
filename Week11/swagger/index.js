const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'HOMEWORK - Week 11_Unit Testing & Development',
    description: 'Nama : Raie Aswajjillah\nKelas : FSWD05B\nKelompok : 1\n\nIni adalah dokentasi dari cara menggunakan aplikasi TodoAPI pada tahap development, untuk cara install, mengubah dan melakukan Unit Testing klik [disini](https://github.com/RaiA133/TugasRakamin/tree/master/Week11), untuk melihat dokentasi dari cara penginstalan hingga unit testing'
  },
  host: 'locahost:3000',
  schemes: ['http']
}
const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']
swaggerAutogen(outputFile, endpointsFiles, doc)
