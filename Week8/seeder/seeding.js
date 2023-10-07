var pool = require('../db/conn');
var fs = require('fs');

const seedQuery = fs.readFileSync('seeder/seeding.sql', { encoding: 'utf8'});
pool.query(seedQuery, (err, res) => {
    if (err) console.log(err);
    console.log('Seeding complete');
    pool.end();
})