// для публичного сервера

const express = require('express');
const router = require('express').Router();

const { PORT = 3000, NODE_ENV } = process.env;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});