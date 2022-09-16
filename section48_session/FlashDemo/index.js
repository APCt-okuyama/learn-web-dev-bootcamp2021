const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = { secret: 'mysecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));
app.use(flash());

const Farm = require('./models/farm');

mongoose.connect('mongodb://localhost:27017/flashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBコネクションOK！！');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー！！！');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next();
});

// Farm関連
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id);
    res.render('farms/show', { farm });
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', '新しい農場を登録しました');
    res.redirect('/farms');
});

app.listen(3000, () => {
    console.log('ポート3000でリクエスト待受中...');
});