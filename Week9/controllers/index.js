require('dotenv').config();
const pool = require('../db/database')
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey';

class Controller {

    // GET ALL DATA USERS
    static getAllUsers(req, res, next){
        pool.query(`SELECT * FROM users ORDER BY id ${req.query.order} ${req.query.limit ? 'LIMIT '+req.query.limit : '' }`, (err, results) => {
            if (err) res.json({ message: `Tabel tidak ada, atau error : ${err}`});
            res.status(200).send(results.rows);
        })
    }

    // POST | REGISTER USER
    static async register(req, res, next) {
        const { email, gender, password } = req.body;
        const role = 'user';
        try {
            await pool.query(`INSERT INTO users(email, gender, password, role) VALUES('${email}', '${gender}', '${password}', '${role}')`);
            pool.query(`SELECT * FROM users WHERE email = '${email}' ORDER BY id DESC`, (err, results) => {
                if (err) res.json({ message: `Tabel tidak ada, atau error : ${err}`});
                res.status(200).json({ 
                    message: "Registrasi berhasil", 
                    dataRegistered: results.rows,
                    note: "jika dataRegistered tidak sesuai dengan data Body, Periksa kembali isi Body."
                });
            });
        } catch (error) {
            res.status(500).json({ message: `Tabel tidak ada, atau error: ${error}`});
        }
    }

    // DELETE DATA USERS BY ID
    static async deleteUsersById(req, res, next){
        const { id } = req.params;

        try {
            await pool.query(`DELETE FROM users WHERE id = '${id}'`);
            res.status(200).json({ message: `Delete Users Data dengan ID ${id} Berhasil`});
        } catch (error) {
            res.status(500).json({ message: `Tabel tidak ada, atau error : ${error}`});
        }
    }

    // PROSES LOGIN
    static login(req, res, next) {
        const { email } = req.userData;

        // Menghasilkan token JWT dengan waktu kedaluwarsa 5 menit (300 detik)
        const token = jwt.sign({ email }, secretKey, { expiresIn: '300s' });

        // dikirim ke middleware.
        req.token = token;

        res.status(200).json({
            message: "Login berhasil, Segera Masukan Token di value dari Hearders Authorization pada POSTMAN",
            token_expired: "5 menit",
            data: { email, token }
        });
        next();
    }




    // GET ALL DATA MOVIES & PAGINATE
    static getAllMovies(req, res, next){
        pool.query(`SELECT * FROM movies ORDER BY id ${req.query.order} ${req.query.limit ? 'LIMIT '+req.query.limit : '' }`, (err, results) => {
            if (err) res.json({ message: `Tabel tidak ada, atau error : ${err}`});
            res.status(200).send(results.rows);
        })
    }

    // GET DATA MOVIES BY ID
    static getMoviesById(req, res, next){
        const { id } = req.params;
        pool.query(`SELECT * FROM movies WHERE id = ${id} ORDER BY id DESC`, (err, results) => {
            if (err) res.json({ message: `Tabel tidak ada, atau error : ${err}`})
            else {
                // middleware sederhana | jika data kosong, berarti id salah
                if (results.rows.length === 0) {
                    res.status(404).json({ message: `Data dengan ID ${id} tidak ditemukan`});
                } else {
                    res.status(200).send(results.rows);
                }
            }
        })
    }

    // POST DATA MOVIES
    static postMovies(req, res, next){
        const { title, genres, year } = req.body
        
        pool.query(`INSERT INTO movies(title, genres, year) VALUES('${title}', '${genres}', '${year}')`, (err, results) => {
            if (err) res.json({ message: `Tabel tidak ada, atau error : ${err}`});
            pool.query(`SELECT * FROM movies WHERE title = '${title}' ORDER BY id DESC`, (err, results) => {
                if (err) res.json({ message: `Tabel tidak ada, atau error : ${err}`});
                res.status(200).json({ 
                    message: "Post Data Baru Berhasil", 
                    dataPosted: results.rows,
                    note: "jika dataPosted tidak sesuai dengan data Body, Periksa kembali isi Body."
                });
            });
        })
    }

    // UPDATE/PUT DATA MOVIES BY ID
    static async updateMoviesById(req, res, next){
        const { id } = req.params;
        const { title, genres, year } = req.body

        try {
            await pool.query(`UPDATE movies SET title = '${title}', genres = '${genres}', year = '${year}' WHERE id = '${id}'`);
            res.status(200).json({ 
                message: "Update Data Baru Berhasil", 
                dataUpdated: {id, title, genres, year},
                note: "jika dataUpdated tidak sesuai dengan data Body, Periksa kembali isi Body."
            });
        } catch (error) {
            res.status(500).json({ message: `Tabel tidak ada, atau error : ${error}`});
        }
    }

    // DELETE DATA MOVIES BY ID
    static async deleteMoviesById(req, res, next){
        const { id } = req.params;

        try {
            await pool.query(`DELETE FROM movies WHERE id = '${id}'`);
            res.status(200).json({ message: `Delete Movies Data dengan ID ${id} Berhasil`});
        } catch (error) {
            res.status(500).json({ message: `Tabel tidak ada, atau error : ${error}`});
        }
    }

}

module.exports = Controller;


