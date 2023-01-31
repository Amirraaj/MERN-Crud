import mongoose from "mongoose"


const Connection = async (username,password) =>{
    const URL =`mongodb://${username}:${password}@ac-cllucgh-shard-00-00.kpeaqvy.mongodb.net:27017,ac-cllucgh-shard-00-01.kpeaqvy.mongodb.net:27017,ac-cllucgh-shard-00-02.kpeaqvy.mongodb.net:27017/?ssl=true&replicaSet=atlas-sf79zu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try{
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log("db connected sucessfully");
    }catch(error){
        console.log("Error while conecting database",error)
    }
}

export default Connection