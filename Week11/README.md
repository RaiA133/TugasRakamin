# # HOMEWORK - Week 11
Raie Aswajjillah | FSWD-5B | Kelompok 1

```bash
npm install
```
Setelah melakukan `npm install` , lakukan setup file config.json untuk mengatur username & password dari databasemu.

## Setup .env
Jika ingin melakukan `npm run start` ubah `NODE_TEST` pada file config.json menjadi `NODE_TEST=development`. Jika `NODE_TEST=test` maka proses listening dari server tidak akan berjalan.

## Step Setup Database Utama*
```bash
npx sequelize-cli db:create
```
```bash
npx sequelize-cli db:migrate
```
```bash
npx sequelize-cli db:seed:all
```
Lakukan ``npx sequelize-cli db:migrate:undo`` jika ingin menghapus table, lalu ulang semua 


## Step Setup Database Test untuk Jest (run on git bash)*
```bash
NODE_ENV=test npx sequelize-cli db:create
```
```bash
NODE_ENV=test npx sequelize-cli db:migrate
```
```bash
NODE_ENV=test npx sequelize-cli db:seed:all
```
Lakukan ``NODE_ENV=test npx sequelize-cli db:migrate:undo`` jika ingin menghapus table, lalu ulang semua 

## Unit Testing
Untuk menjalankan Unit Testing dengan Jest pastikan `DE_ENV=test`, lalu jalankan kode dibawah ini.
```bash
npm run test
```
jest akan secara otomatis menjalankan semua endpoint diantaranya dalam melakukan : 
- GET `http://locahost:3000/` ( Ambil Semua Data Todo)
- GET `http://locahost:3000/:id` ( Ambil Data Todo Berdasarkan ID )
- POST `http://locahost:3000/create` ( Buat Data Todo Baru ) 
- PUT `http://locahost:3000/update/:id` ( Update Data Todo Berdasarkan ID ) 
- PUT `http://locahost:3000/delete/:id` ( Delete Data Todo Berdasarkan ID ) 
