import mongoose from mongoose;

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    tasks: {
        type: String,
    }
})

export default mongoose.model("ToDo", todoSchema)