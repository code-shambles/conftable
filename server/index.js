const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoDB = 'mongodb://127.0.0.1:27017/conftable?gssapiServiceName=mongodb';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello Conf World!');
});

app.listen(8789, () => {
  console.log('Conftable server listening on port 8789!');
});
