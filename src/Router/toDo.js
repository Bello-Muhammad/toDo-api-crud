const express = require('express');
const Router = new express.Router();
const {addToDo, getToDo, getAllToDo, updateToDo, deleteToDo} = require('../controller/toDoController');


Router.post('/addnewlist', addToDo)

Router.get('/toDo', getToDo)

Router.get('/alltoDo', getAllToDo)

Router.patch('/updatetodo/:id', updateToDo)

Router.delete('/removetodo/:id', deleteToDo)


module.exports = Router;