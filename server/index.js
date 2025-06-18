const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const dbConnect = require('./config/db');

const app = express();
dbConnect();

dotenv.config();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact Us Page!');
});

app.get('/chats', (req, res) => {
  res.send(chats);
});

app.get('/chats/:id', (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
