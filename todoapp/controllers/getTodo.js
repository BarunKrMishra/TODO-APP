//import the model 
const Todo = require("../models/Todo");



//define route handler
exports.getTodo = async (req, res) => {
    try{
       //fetch all items from database
       const todos = await Todo.find({});

       //responce
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"entire todo data is fetched",
       });

    }
    catch(err){
      console.error(err);
      res.status(500)
      .json({
        success:false,
        error:err.message,
        message:'server error',
      })

    }
}


exports.getTodoById = async (req, res) => {
    try{
        //extract todo item on basis by id
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id})

        //data for given id is not found
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"no data found with given id",
            })
        }

        //data for given id is FOUND
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data is fetched`,
        })


    }
    catch(err) {
        
        console.error(err);
        res.status(500)
        .json({
          success:false,
          error:err.message,
          message:'server error',
        })
  

    }
}