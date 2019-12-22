const Mongoclient = require('mongodb').MongoClient;

Mongoclient.connect('mongodb://localhost:27017',(err,client) =>{
    var db = client.db('todapp');
   if(err){
       return console.log('Database doesnot connected')
   }
       console.log('database connected')

   db.collection('native').insertOne({
       name: "Alisha",
       profession: "House"
   },(err,result)=>{
       if(err){
           console.log('there is error',err)
       }
       console.log(result.ops[0]._id.getTimestamp())
       client.close();
   })    
  
})