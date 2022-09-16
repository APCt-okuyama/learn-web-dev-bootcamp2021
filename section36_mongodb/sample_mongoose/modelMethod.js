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

//mongoose.connectの完了を待たずに次の処理を書いても良い。

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

//static func
ProductSchema.statics.updateAllPrice = function (newPrice) {
    console.log('start updatePrice :' + newPrice);

    //条件なしで全部更新
    return this.updateMany({},{ price:newPrice });
}

//モデルの中に関数として実装する
ProductSchema.methods.greet = function() {
    //function() にしているので this　はこの関数
    console.log('greet...' + this);
    console.log('greet...' + this.name);
    console.log(`greet...${this.name}`);    
}

ProductSchema.methods.addCategory = function( newOne ) {
    console.log('start add');
    this.categories.push(newOne);
    return this.save()
}

// ProductSchema.methods.greet2 = () => {
//     //function() にしているので this　はこの関数
//     console.log('greet2...' + JSON.stringify(this));
// }

const Product = mongoose.model('Product', ProductSchema);
Product.updateAllPrice(9).then(msg=>{
    console.log('updateAllPrice start')    
    console.log(msg)
});
const p = new Product({ name: 'test0901'});

p.greet(); 
//p.greet2(); 
//p.save(); //保存
p.addCategory("add category");

//
const findProduct = async () => {
    console.log("find product...");
    const data = await Product.findOne({name: 'test0901'});
    console.log("found...");    
    await data.addCategory('aaa');
    console.log(data);
}
findProduct();

console.log('file end.')
