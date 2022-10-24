const mongoose = require('mongoose');


const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        lowercase: true
    },

    description: {
        type: String,
        trim: true
    }
},
{timestamps: true}
)


const toDo = mongoose.model('toDo', toDoSchema)

module.exports = toDo;