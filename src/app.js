const express = require('express')
require('./db/mongoose')
const toDo = require('./Router/toDo')

const app = express();

app.use(express.json())
app.use(toDo)


module.exports = app;

// mongodb+srv://nestApi-user:09034028984@cluster0.jahbx.mongodb.net/?retryWrites=true&w=majority

