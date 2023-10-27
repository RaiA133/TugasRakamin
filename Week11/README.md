```bash
npm install
```

## Setup step database utama*
```bash
npx sequelize-cli db:create
```
```bash
npx sequelize-cli db:migrate
```
```bash
npx sequelize-cli db:seed:all
```


## Setup step database test (jest)*
```bash
NODE_ENV=test npx sequelize-cli db:create
```
```bash
NODE_ENV=test npx sequelize-cli db:migrate
```
```bash
NODE_ENV=test npx sequelize-cli db:seed:all
```

## Setup .env
NODE_TEST=development | jadikan seperti ini jika ingin `npm run start`
NODE_TEST=test | jadikan seperti ini jika ingin melakukan test