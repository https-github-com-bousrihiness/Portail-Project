const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const randonneeSchema= new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            required: true
        },
        datesortie: {
            type: Date,
            required: false
        },
        datefin: {
            type: Date,
            required: false,
        },
        destiniation: {
            type: String,
            required: false
        },
        prix: {
            type: Number,
            required: true
        },
        nombre_places: {
            type: Number,
            required: true
        },
        id_organisateur: {
            type: Number,
            required: true
        }
    }
)
module.exports = mongoose.model('randonnee', randonneeSchema);