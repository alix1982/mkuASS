const express = require('express');
const router = require('express').Router();

// const { PORT = 3001, NODE_ENV } = process.env; // для локального хоста
const { PORT = 3000, NODE_ENV } = process.env; // для публичного сервера
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});