const express = require('express');
const app = express();
const morgan = require('morgan'); //log用のミドルウエアです

app.use(morgan('tiny')); //フォーマットを指定 tiny,dev,commonなど

app.use((req, res, next)=> {
    console.log('my middleware...1');
    next();
    //return;
    //console.log('my middleware...1end');    
    //res.send('ハイジャック');
});

//これが自作のmiddleware
app.use((req, res, next) => {
    console.log('my middleware...2');

    //reqにリクエスト時間を追加している
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

//このミドルウエアは/dogsの場合のみ実行される
// httpのすべてのメソッドで有効
app.use('/dogs', (req, res, next) => {
    console.log('いぬーーー！！');
    next();
});

//middleware関数を定義して、ルーティングに設定することが可能
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'supersecret') {
        return next();
    }
    res.send('パスワードが必要です');
}

// app.use((req, res, next) => {
//     console.log('初めてのミドルウェア！！！');
//     return next();
//     console.log('初めてのミドルウェアのnextのあとの処理！！！');
// });
// app.use((req, res, next) => {
//     console.log('2個目のミドルウェア！！！');
//     return next();
// });
// app.use((req, res, next) => {
//     console.log('3個目のミドルウェア！！！');
//     return next();
// });

app.get('/', (req, res) => {
    console.log(`リクエスト時刻: ${req.requestTime}`);
    res.send('ホームページ！！');
});

app.get('/dogs', (req, res) => {
    console.log(`リクエスト時刻: ${req.requestTime}`);
    res.send('わんわん');
});

//callback関数を複数していできる
//特定のパスに対してのみMiddlewareを適用することが可能
app.get('/secret', verifyPassword, (req, res) => {
    res.send('ここは秘密のページです！！誰にも言わないで！！');
});

//上記以外すべてのパス
app.use((req, res) => {
    res.status(404).send('ページが見つかりません');
});


app.listen(3000, () => {
    console.log('locahost:3000で待受中...');
});