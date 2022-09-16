const mongoose = require('mongoose');
var env = require('dotenv').config();

console.log('start mongoose');
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
    console.log('接続できました。')
})
 .catch((err) => {
    console.error(err)
});

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

//async関数なのでPromiseを返す
personSchema.pre('save', async function () {
    // this.first = 'ほげ';
    // this.last = 'もげ';
    console.log('今から保存するよ！！！');
    //promiseを返す
});

personSchema.post('save', async function () {
    console.log('保存したよ！！！！');
});

const Person = mongoose.model('Person', personSchema);

p = new Person({first:'aaa', last:'bbb'});
p.save();


//ミドルウェアの利用