const express = require('express');
const app = express();
const session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

//COSMOSDB_CONNECT
var env = require('dotenv').config();
console.log('start...');
console.log(process.env.COSMOSDB_CONNECT);
var store = new MongoDBStore({
    uri: process.env.COSMOSDB_CONNECT,
    databaseName: 'connect_mongodb_session',
    collection: 'mySessions',
    expiresKey: `_ts`,
    expiresAfterSeconds: 60 //cookie の maxAge と同じ値を設定
  });

store.on('error', function(error) {
    console.log(error);
  });

const sessionOptions = {
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie:{ maxAge: 60 * 1000 }
};
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    console.log('start viewcount');
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }

    res.send(`あなたは${req.session.count}回このページを表示しました`);
});

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`ようこそ、${username}さん`);
})

app.listen(3000, () => {
    console.log('ポート3000で待受中...');
});