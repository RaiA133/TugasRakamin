const express = require('express');
const app = express();
const pool = require('./db/conn')
const routing = require('./routes');
const database = require('./database.json')
const port = 3000; 

app.use('/data', routing)

// CEK KONEKSI
pool.connect((err, res) => {
    if(err) console.log(err);
    console.log(`berhasil connect ke database`);
    app.listen(port, () => {
        console.log(`App listening on http://${database.dev.host}:${port}`);
    });
})



// HTML BUTTON SEDERHANA
app.get('/', async (req, res) => {
    

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Homework 8 | Raie</title>
    </head>
    <body>
        <div style="margin: 50px;">
            <h2>Soal No 1 : <span style="font-weight: lighter; font-size: 18px;"> Lakukan seeding untuk menambahkan 5 data baru pada data table <b>actor</b> yang disediakan</span> </h2>
            <a href="/data/actor/seeding"><button style="margin-bottom: 10px;">Lakukan Seeding Pada Data Actor</button></a>
            <a href="/data/actor/show"><button>Lihat Data Actor Terbaru</button></a>
            <hr style="margin-top: 25px;">
            <h2>Soal No 2 : <span style="font-weight: lighter; font-size: 18px;">Menampilkan data seluruh list film, data film tertentu berdasarkan id, data list category dan data list film berdasarkan category</span> </h2>
            <a href="/data/film/show"><button style="margin-bottom: 10px;">Tampilkan Semua Data Film</button></a>
            <a href="/data/film/show/1"><button style="margin-bottom: 10px;" onclick="return alert('ubah angka 1 pada /data/film/show/1 di url atas untuk melihat perbedaan')">Tampilkan Data Film Berdasarkan ID</button></a>
            <a href="/data/film/film-category"><button style="margin-bottom: 10px;">Tampilkan Category Film</button></a><br>  
            <select id="selectLink" onchange="window.location.href=this.value">
                <option value="" disabled selected>List Data Film Berdasarkan Category</option>
                <option value="/data/film/film-category/Action">Action</option>
                <option value="/data/film/film-category/Animation">Animation</option>
                <option value="/data/film/film-category/Children">Children</option>
                <option value="/data/film/film-category/Classics">Classics</option>
                <option value="/data/film/film-category/Comedy">Comedy</option>
                <option value="/data/film/film-category/Documentary">Documentary</option>
                <option value="/data/film/film-category/Family">Family</option>
                <option value="/data/film/film-category/Foreign">Foreign</option>
                <option value="/data/film/film-category/Games">Games</option>
                <option value="/data/film/film-category/Horror">Horror</option>
                <option value="/data/film/film-category/Music">Music</option>
                <option value="/data/film/film-category/New">New</option>
                <option value="/data/film/film-category/Sci-Fi">Sci-Fi</option>
                <option value="/data/film/film-category/Sports">Sports</option>
                <option value="/data/film/film-category/Travel">Travel</option>
            </select>
            <hr style="margin-top: 25px;">    
            <h2>Soal No 3 : <span style="font-weight: lighter; font-size: 18px;">Lakukan migrasi database dengan menambahkan column <b>age</b> pada tabel <b>actor</b> yang tersedia</span> </h2>
            <a href="/data/actor/migrate-up"><button style="margin-bottom: 10px;">Migrate Data Actor</button></a>
            <a href="/data/actor/migrate-down"><button title="juga delete hasil seeding sebelumnya (jika ada data actor dengan actor_id > 200)">Rollback Data Actor</button></a>
        </div>
    </body>
    </html>
    `)
})
