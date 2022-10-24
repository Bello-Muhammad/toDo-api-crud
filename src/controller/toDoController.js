const e = require('express');
const { update, findOne } = require('../model/toDo');
const toDo = require('../model/toDo');


const getAllToDo = async(req, res) => {

    try {
        const todo = await toDo.find({})
        
        if(todo.length === 0) {
            return res.send('No task to display!')
        }

        todo.toString()
        res.send(todo)
        
    } catch (e) {
        res.status(400).send(e)
    }

}

const getToDo = async(req, res) => {
    
    try {
        

        const body = {title: req.body.title.toLowerCase()} 

        const todo = await toDo.findOne({...body})
        
        if(!todo) {
           return res.send('todo can not be found')
        }

        res.send(todo)
        

    } catch (e) {
        res.status(400).send(e)
    }
    
}

const addToDo = async(req, res) => {
    
    try {
        const {title, description} = req.body
        const noteTodo = await toDo.findOne({title})

        if(noteTodo) {
            noteTodo.toString()
            return res.send(`${noteTodo.title} exist`)
        }
            
        
        const todo = new toDo({
            title,
            description
        })
        
        await todo.save(() => console.log('item saved'))        
        todo.toString()
        res.send(todo.title)

    } catch (e) {
        console.log(e)
    }
}

const updateToDo = async(req, res) => {

    try {

        const todo = await toDo.findOneAndUpdate({_id: req.params.id},{
            $set : {
                ...req.body
            }
        })

    
        await todo.save()
        res.send(todo.toString())
    } catch (error) {
        console.log(error)
    }
}

const deleteToDo = async(req, res) => {
    try {

        const todo = await toDo.findOneAndDelete({ _id: req.params.id })

        // const todo = await toDo.findOne({_id: req.params.id})

        todo.toString()
        res.send(todo)
        
        console.log('item deleted')

    } catch (e) {
        res.status(500).send()
    }
}


module.exports = {
    addToDo,
    getToDo,
    getAllToDo,
    updateToDo,
    deleteToDo
}

