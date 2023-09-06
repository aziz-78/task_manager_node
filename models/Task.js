const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a task"],
        trim:true,
        maxlength:[20,"length cann not exceed 20"]

    },
    completed:{
        type:Boolean,
        default:false
    }
}

)

module.exports = mongoose.model('Task',TaskSchema)