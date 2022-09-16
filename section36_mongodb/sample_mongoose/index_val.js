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
    console.log('Connection to CosmosDB successful')
})
 .catch((err) => {
    console.error(err)
});

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        maxLength: 20
    },
    price:{
        type: Number,
        require: true,
        default: 0,
        min: [0, "price は 0 以上である必要があります。"]
    },
    categories: [String],
    categories2: {
        type: [String]
    },
    size: {
        type: String,
        enum:['S','M','L'],
        default: 'M'
    }
});

const Product = mongoose.model('Product', ProductSchema)

// const bike = new Product({
//     name: 'test test',
//     price: "2980",
//     desc: "これは無視されて、保存されない。",
//     categories:["aaa","bbb","ccc"],
//     categories2:[1,2,3]
// });

// bike.save().then(data => {
//     console.log('success.');
//     console.log(data);    
// })


//注意 更新の場合は runValidators を指定する
Product.findOneAndUpdate( { name: "test test"}, { price: 99}, { new: true, runValidators: true })
    .then(data => console.log(data))
    .catch(err => {console.log(err)})


//モデルにメソッドを追加する
