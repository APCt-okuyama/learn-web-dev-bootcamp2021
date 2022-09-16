const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBコネクションOK！！');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー！！！');
        console.log(err);
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'メロン', price: 498, season: 'summer'},
//     {name: 'スイカ', price: 498, season: 'summer'},
//     {name: 'アスパラガス', price: 298, season: 'spring'}
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'まったり牧場', city: '淡路市' });
//     const melon = await Product.findOne({ name: 'メロン' });
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'まったり牧場' });
    const watermelon = await Product.findOne({ name: 'スイカ' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({ name: 'まったり牧場' })
    .populate('products')
    .then(farm => console.log(farm));