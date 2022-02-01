const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors=require('cors');
const knex= require('knex');

const PORT= process.env.PORT || 3000;

const list=require('./controllers/list');
const addArgonaut=require('./controllers/addArgonaut');
// const { Client } = require('pg');

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.json('connexion to the server succeeded.');
});

app.get('/list', (req, res) => list.handleList(req,res,db));

app.post('/add', addArgonaut.handleAdd(db))

app.listen(PORT, () => {
	console.log(`server initialized & listening port ${PORT}`);
})