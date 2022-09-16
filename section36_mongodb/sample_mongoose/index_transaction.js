const mongoose = require('mongoose');
var env = require('dotenv').config();

console.log('start マルチドキュメント トランザクションの例');
//const connectString = 'mongodb://localhost:27017/test';
mongoose.connect("mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb", {
   auth: {
     username: process.env.COSMOSDB_USER,
     password: process.env.COSMOSDB_PASSWORD
   },
 useNewUrlParser: true,
 useUnifiedTopology: true,
 retryWrites: false
 })
 .then(() => {
    console.log('CosmosDBに接続しました。')
    registor_tran();    
})
 .catch((err) => {
    console.error(err)
});

const conn = mongoose.connection;
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  address: String
});
const User = mongoose.model('User', userSchema);

const registor_tran = async () =>{
  console.log('start tx ...');
  let session = null;
  return User.createCollection().
    then(()=> mongoose.startSession() ).
    then(_session => {
      session = _session;
      session.startTransaction();
      return User.create([{name:'taro'}, { session: session }]);
    })
    .then(()=>{
      console.log('abort done.')
      session.abortTransaction();
      session.endSession();
    })
    .then(()=>console.log('done'));
}

