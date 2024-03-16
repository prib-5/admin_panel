import mongoose from "mongoose";


const Connection = async(username, password) =>{
    
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.kcr7v.mongodb.net:27017,cluster0-shard-00-01.kcr7v.mongodb.net:27017,cluster0-shard-00-02.kcr7v.mongodb.net:27017/?ssl=true&replicaSet=atlas-f67jje-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log("Db Connection Successfully");
    }catch(error){
        console.log('Connection Error with Database', error);
    }
}

export default Connection;