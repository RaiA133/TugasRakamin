const express = require('express');
const route = express.Router();
const pool = require('../db/database');  
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey';


// middleware UPDATE/PUT & DELETE DATA | data akan di update jika data berdasarkan id dari params, ada di table movies
const checkMovieExistence = async (req, res, next) => {
    const { id } = req.params;
    try {
        const selectResults = await pool.query(`SELECT * FROM movies WHERE id = '${id}'`);
        if (selectResults.rows.length === 0) {
            return res.status(404).json({ message: `Data Movies dengan ID ${id} tidak ditemukan` });
        }
        next();
    } catch (error) {
        res.status(500).send(`Tabel tidak ada, atau error : ${error}`);
    }
};

const checkUserExistenceById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const selectResults = await pool.query(`SELECT * FROM users WHERE id = '${id}'`);
        if (selectResults.rows.length === 0) {
            return res.status(404).json({ message: `Data Users dengan ID ${id} tidak ditemukan` });
        }
        next();
    } catch (error) {
        res.status(500).send(`Tabel tidak ada, atau error : ${error}`);
    }
};

// middlware REGISTRASI | cek jika email sudah terdaftar, jika sudah maka kita tidak bisa registrasi
const checkUserExistenceByEmail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const selectResults = await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
        if (selectResults.rows.length > 0) {
            return res.status(400).json({ message: `${email} sudah terdaftar. Gunakan email lain.` });
        }
        next();
    } catch (error) {
        res.status(500).send(`Tabel tidak ada, atau error: ${error}`);
    }
};

// middleware LOGIN | cek jika email dan password ada di database
const checkUserExistence = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const selectResults = await pool.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`);
        if (selectResults.rows.length === 0) {
            return res.status(401).json({ message: "Email atau password salah." });
        }
        req.userData = { email }; // Menyimpan data user untuk diakses di handler selanjutnya
        next();
    } catch (error) {
        res.status(500).send(`Tabel tidak ada, atau error: ${error}`);
    }
};

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Anda Belum Login. Atau Token belum diisi (Pergi ke Tab Hearders lalu isi Authorization dengan token yang diberikan)." });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Token tidak valid. Atau Token telah EXPIRED, Login Kembali Untuk Mendapat Token Baru." });
        }
        // Token valid, menyimpan data pengguna ke dalam objek req untuk digunakan di handler selanjutnya
        req.userData = decoded;
        next();
    });
};

module.exports = { checkMovieExistence, checkUserExistenceById, checkUserExistenceByEmail, checkUserExistence, verifyToken, route }; 
