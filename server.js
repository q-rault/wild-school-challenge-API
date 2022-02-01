const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT= process.env.PORT || 3000;
const list=require('./controllers/list');
const addArgonaut=require('./controllers/addArgonaut');

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

app.get('/list', (req, res) => list.handleList(req,res,db));

app.post('/add', addArgonaut.handleAdd(db))

app.listen(PORT, () => {
	console.log(`server initialized & listening port ${PORT}`);
})