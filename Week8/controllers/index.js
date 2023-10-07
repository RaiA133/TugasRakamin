const pool = require('../db/conn')
const nodeCmd = require('node-cmd');

class Controller {

    static seedingActor(req, res, next){
        nodeCmd.run('npm run seed', (err, data, stderr) => console.log(data));
        res.status(200).json({
            message: "Seeding Actor successful, Please go back to / ,(dont refresh this url)",
            catatan: "Check Data Actor Terbaru"
        })
    }

    static showActor(req, res, next){
        pool.query(`SELECT * FROM actor ORDER BY actor_id DESC`, (err, results) => {
            if (err) {
                res.send(`Tabel tidak ada, Lakukan migrate dengan 'npm run migrate', atau error : ${err}`)
            }
            res.status(200).send(results.rows)
        })
    }

    static filmShowAll(req, res, next){
        pool.query(`SELECT * FROM film ORDER BY film_id ASC`, (err, results) => {
            if (err) {
                res.send(`Tabel tidak ada, Lakukan migrate dengan 'npm run migrate', atau error : ${err}`)
            }
            res.status(200).send(results.rows)
        })
    }

    static filmShowID(req, res, next){
        const { film_id } = req.params;
        pool.query(`SELECT * FROM film WHERE film_id = ${film_id} ORDER BY film_id DESC`, (err, results) => {
            if (err) {
                res.send(`Tabel tidak ada, Lakukan migrate dengan 'npm run migrate', atau error : ${err}`)
            } 
            res.status(200).send(results.rows)
        })
    }

    static categoryAll(req, res, next){
        pool.query(`SELECT * FROM category ORDER BY category_id ASC`, (err, results) => {
            if (err) {
                res.send(`Tabel tidak ada, Lakukan migrate dengan 'npm run migrate', atau error : ${err}`)
            } 
            res.status(200).send(results.rows)
        })
    }

    static filmCategory(req, res, next) {
        const { category } = req.params;

        pool.query(`SELECT film.* FROM film JOIN film_category ON film.film_id = film_category.film_id JOIN category ON film_category.category_id = category.category_id WHERE category.name = '${category}' ;`, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error querying the database' });
            }

            res.status(200).json(results.rows);
        });
    }

    static migrateActorUp(req, res, next){
        nodeCmd.run('npm run migrate', (err, data, stderr) => console.log(data));
        res.status(200).json({message: "Migration Up Actor successful, Please go back to / , jika ingin migrate lagi, silahkan rollback"})
    }

    static migrateActorDown(req, res, next){
        nodeCmd.run('npm run rollback', (err, data, stderr) => console.log(data));
        res.status(200).json({
            message: "Rollback Migration Actor successful, Please go back to / ,Sekarang anda bisa melakukan migrate",
            catatan: "Data actor sudah kembali ke awal, lakukan migrate terlebih dahulu jika masih belum berubah",
        })
    }

    
}

module.exports = Controller;


