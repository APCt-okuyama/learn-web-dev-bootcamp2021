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

// mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('コネクションOK！！');
//     })
//     .catch(err => {
//         console.log('コネクションエラー！！！');
//         console.log(err);
//     })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// dbは.envで指定
// modelがコンテナ(collection)に対応する
const Movie = mongoose.model('Movie', movieSchema);

//modelのインスタンス化
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
// amadeus.save().then(()=>{
//     console.log('save done.');
// })
// .catch( error => {
//     console.log('error:' + error );
// })

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ]).then(data => {
//     console.log('成功！！！');
//     console.log(data);
// });


//Movie.findOneAnd


console.log('end mongoose');
