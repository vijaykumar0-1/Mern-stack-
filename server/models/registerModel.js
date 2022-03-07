const mongoose = require('mongoose')


const registerSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:20
    }
},{
    timestamps:true,
}
)

const model = mongoose.model('registeredUser',registerSchema);
module.exports = model;