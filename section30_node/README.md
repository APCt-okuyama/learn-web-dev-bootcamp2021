# node
公式ではversion毎にドキュメントが用意されています。  
https://nodejs.org/ja/docs/

asyn と sync
callback と promise

モジュールの読み込み
```
const fs = require('fs')
```

# npm 
## module.exports

相対パスでファイルを指定 .jsは省略できる
```
const math = require('./math')
```
分割代入
```
const { PI, square } = require('./math')
```

module.export

export は module.export　のショートカット

## require
ディレクトリ単位で require できる

index.js を用意 (フォルダ指定されるとdefaultで読み込まれる)
```
const aaa = require('./aaa');
const bbb = require('./bbb');
const ccc = require('./ccc');

module.export = [aaa,bbb,ccc];
```

## npm コマンド (node pagage manager)
依存モジュールを含めてインストールしてくれる。
```
npm install --save xxxx
```

グローバルにインストール (-g)　/user/local/lib/modulesにインストール
※コマンドラインツールなどをインストールする場合によく利用される 

## package.json, package-lock.json
npm init

package.json

package-lock.json

## express 
```
npm install --save express
```
※ --save は無くてもあっても良い

```
const express = require('express');
const app express();
app.listen(3000, () => {
    console.log('listen 3000....');
});
```