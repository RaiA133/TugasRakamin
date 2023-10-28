const request = require('supertest')
const app = require('../app')

console.log(`PASTIKAN JIKA KONDISI TABLE hw_week_11_rakamin_test FRESH,
BELUM MELAKUKAN EDIT TABLE SETELAH MELAKUKAN SEEDING`)

test('GET ALL DATA TODO', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      expect(response.body.message).toBe('Success')
      done()
    })
    .catch(done)
})

test('GET DATA TODO by ID', (done) => {
  request(app)
    .get('/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      expect(response.body.message).toBe('Success')
      done()
    })
    .catch(done)
})

test('CREATE NEW DATA TODO', (done) => {
  const data = {
    title: 'Judul Baru',
    description: 'Deskripsi Baru'
  }

  request(app)
    .post('/create')
    .send(data)
    .expect('Content-Type', /json/)
    .expect(201)
    .then(response => {
      expect(response.body.message).toBe('Todo Created!')
      done()
    })
    .catch(done)
})

test('UPDATE DATA TODO by ID', (done) => {
  const data = {
    title: 'Judul Updated',
    description: 'Deskripsi Updated'
  }

  request(app)
    .put('/update/4')
    .send(data)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      console.log(response.body)
      expect(response.body.message).toBe('Todo Updated!')
      done()
    })
    .catch(done)
})

test('SOFT DELETE DATA TODO by ID', (done) => {
  request(app)
    .put('/delete/4')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      expect(response.body.message).toBe('Todo Deleted!')
      done()
    })
    .catch(done)
})
