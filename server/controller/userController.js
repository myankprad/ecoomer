import User from "../model/user.scheme.js";



export const userSignup = async (req, response)=>{
   try{
   const exist =   await User.fineOne({username: request.body.username})
    if(exist){
        return response.status(401).json({message : "username already exist"})
    }
    //  console.log(req.body)
    const user = req.body;
    const newUser = new User(user);
    await newUser.save()
    response.status(200).json({message: user})
   } catch(error){
//    console.log(error)
 response.status(500).json({message: error.message})
   }
}

export const userLogin = async (req, response)=>{
    try {
        const username = req.body.username;
        const password = req.body.password;
        let user = await User.fineOne({username: username, password: password})
        if(user){
            return response.status(200).json({data: user})
        } else{
            return response.status(401).json("invalid login credentials ")
        }
    } catch (error) {
        response.status(500).json("error", error.message)
    }
}