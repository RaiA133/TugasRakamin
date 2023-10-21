// { movies } & { users } harus sesuai dengan nama model
const { movies } = require('../models');
const { users } = require('../models');
const userService = require('../services/userService');

class Controller {

    static index(req, res){
        res.render('index')
    }

    static async movies(req, res){
        const data = await movies.findAll()
            .catch(err => {
                res.status(500).json({message: 'Something went wrong', error: err})
            })
        res.render('movies', {data})
        console.log(data)
    }
    static async moviesById(req, res, next) {
        // SELECT * FROM movies WHERE id = :id
        movies.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            if (!data) {
                res.status(404).json({message: 'Movie not found!'});
            } else {
                res.status(200).json({data});
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Something went wrong', error: err})
        })
    }


    static upload(req, res){
        res.render('upload')
    }

    static async uploadBerhasil(req, res){
        const title = req.body.title;
        const genres = req.body.genres;
        const year = req.body.year;
        const file = req.file.originalname;

        movies.create({ 
            title: title,
            genres:genres,
            year: year,
            photo: file
        });

        res.locals.successMessage = 'Data & File berhasil diunggah.';
        res.render('upload')
    }



    // SISTEM Service Repository Pattern 
    static async createUser(req, res) {
        try {
          const user = await userService.createUser(req.body);
          res.json(user);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Gagal membuat pengguna' });
        }
      }
    
    static async updateUser(req, res) {
        const { id } = req.params;
        try {
          const [count] = await userService.updateUser(id, req.body);
          if (count === 0) {
            res.status(404).json({ error: 'Pengguna tidak ditemukan' });
          } else {
            res.json({ message: 'Pengguna diperbarui' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Gagal memperbarui pengguna' });
        }
      }
    
    static async findAllUsers(req, res) {
        try {
          const users = await userService.findAllUsers();
          res.json(users);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Gagal mendapatkan daftar pengguna' });
        }
      }
    
    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
          const count = await userService.deleteUser(id);
          if (count === 0) {
            res.status(404).json({ error: 'Pengguna tidak ditemukan' });
          } else {
            res.json({ message: 'Pengguna dihapus' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Gagal menghapus pengguna' });
        }
      }
    
    static async findUser(req, res) {
        const { id } = req.params;
        try {
          const user = await userService.findUser(id);
          if (!user) {
            res.status(404).json({ error: 'Pengguna tidak ditemukan' });
          } else {
            res.json(user);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Gagal mencari pengguna' });
        }
      }
}

module.exports = Controller;