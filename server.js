const express = require('express');
const PORT = process.env.port || 3001;
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static);