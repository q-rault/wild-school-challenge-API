const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT= process.env.PORT || 3000;

const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'qrault',
    password : '',
    database : 'wildschoolDB'
  }
});

app.use(bodyParser.json());
// app.use(cors());


app.get('/', (req, res) => {
	res.json('connexion to the server succeeded');
});

app.listen(PORT, () => {
	console.log(`server initialized & listening port ${PORT}`);
})