import mongoose  from "mongoose";

const expenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true,
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        maxLength:20,
        trim:true,
    }
},{timestamps:true}) 

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
