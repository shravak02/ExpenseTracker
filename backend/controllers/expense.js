import Expense from "../models/expenseModel.js"

const addExpense= async (req,res)=>{
// to check in post man when post at add-income is triggered    
    console.log(req.body);
   const {title ,amount ,category,description,date} = req.body;
   const expense = Expense({
        title,
        amount, 
        category,
        description,
        date
   })
   try { 
    //validation
    if(!title || !category || !description || !date){
              return res.status(400).json({message:'all feilds requied'})
    }
    if(amount <=0|| !amount ==='number'){
              return res.status(400).json({message:'amt must be positive'})
    }
    await expense.save()
    res.status(200).json({message:'Expense Added'})
   } catch (error) {
    res.status(500).json({message:'Server error'})
   }
   console.log(expense)
}
const getExpense = async (req,res)=>{
   try {
      const expenses = await Expense.find().sort({createdAt:-1})
      res.status(200).json(expenses)
   } catch (error) {
      res.status(500).json({message:'Server Erroe'})
   }
}
const deleteExpense = async (req,res)=>{
  const {id} = req.params;
  Expense.findByIdAndDelete(id)
         .then((expense)=>{
            res.status(200).json({message:'Expense Deleted'})
         })
         .catch((err)=>{
            res.status(500).json({message:'Server Error'})
         })
}
export {addExpense,deleteExpense,getExpense}