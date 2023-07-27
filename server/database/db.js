import mongoose from "mongoose"
export  const Connection = async(password)=>{
   const URL = `mongodb+srv://mayanktrad365:${password}@cluster0.q6lfrrk.mongodb.net/?retryWrites=true&w=majority`;
    try {
      await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
      console.log("connected")
    } catch (error) {
       console.log(error) 
    }
}
