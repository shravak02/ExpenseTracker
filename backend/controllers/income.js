import Income from "../models/incomeModel.js"

const addIncome = async (req,res)=>{
// to check in post man when post at add-income is triggered    
    console.log(req.body);
   const {title ,amount ,category,description,date} = req.body;
   const income = Income({
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
    await income.save()
    res.status(200).json({message:'Income Added'})
   } catch (error) {
    res.status(500).json({message:'Server error'})
   }
   console.log(income)
}
const getIncomes = async (req,res)=>{
   try {
      const incomes = await Income.find().sort({createdAt:-1})
      res.status(200).json(incomes)
   } catch (error) {
      res.status(500).json({message:'Server Erroe'})
   }
}
const deleteIncome = async (req,res)=>{
  const {id} = req.params;
  Income.findByIdAndDelete(id)
         .then((income)=>{
            res.status(200).json({message:'Income Deleted'})
         })
         .catch((err)=>{
            res.status(500).json({message:'Server Error'})
         })
}
export {addIncome,deleteIncome,getIncomes}