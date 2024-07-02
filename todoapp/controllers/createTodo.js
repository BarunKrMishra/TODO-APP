//import the model 
const Todo = require("../models/Todo");


//define route handler
exports.createTodo = async (req, res) => {
    try{
        //extracting the info like title and decription from the request body
        const {title, description} = req.body;

        //create a new todo obj and insert in DB
        const response = await Todo.create({title,description});

        //send a json responce with sucess flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'entry created successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}