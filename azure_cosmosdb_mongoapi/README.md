# Azure で mongo db

azure で mongo db (document db) を始める

# Azure Cosmos DB (mongo api)

https://docs.microsoft.com/ja-jp/azure/cosmos-db/mongodb/connect-using-mongoose

```
az group create -n az-mongodb-example -l japaneast
#az group delete -n az-mongodb-example

# Create a Cosmos account for MongoDB API
az cosmosdb create --name example02account --resource-group az-mongodb-example --kind MongoDB --server-version 4.0
```

## azure cosmos db
```
az cosmosdb mongodb database create --account-name example02account --resource-group az-mongodb-example --name my-mongo-db1
```

## collection (option)
※アプリ側からも作成されるので作成は必須ではない
```
az cosmosdb mongodb collection create --account-name example02account --resource-group az-mongodb-example --database-name my-mongo-db1 --name my-collection1
```

## mongosh (docker) を使って接続
(接続文字列をそのまま利用)
```
docker run -it --rm mongo mongosh "mongodb://example02account:xxx ... "

test> db.version()
4.0.0

dbの変更(作成)
test> use my-mongo-01

my-mongo-01> db.movies.find()
[
  {
    _id: ObjectId("630d6fa6103545329cd4ae3d"),
    title: 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R',
    __v: 0
  }
]
```
### CRUD
```
db.dogs.insertOne({name:'taro', age:1})
db.dogs.insertOne({name:'taro', age:2})
db.dogs.insertOne({name:'taro', age:3})
db.dogs.insertOne({name:'taro', age:4})
db.dogs.insertOne({name:'taro', age:5})
db.dogs.updateOne({name:'taro'}, {$set:{name:'taro up'}})
db.dogs.findOne({name:'taro'})
db.dogs.find({name: /^ta/ })
db.dogs.find({age: { $in:[1,2,3]}})
db.dogs.distinct("age")
db.dogs.deleteOne({name:'taro'})
```
### SUM
```
db.dogs.count()
db.dogs.find({name:'taro'}).count()
db.dogs.aggregate({ $group : { "_id" : { age: "$age" } , "my_count":{ "$sum":100 }}})
```
## アプリから mongoose を使って操作
mongoose とは node js の ライブラリ。
ORM と ODM(Document/Data Mapper), モデル定義, CRUD
REPLの使い方
```
```

# Azure で Mongo DB を利用する
cosmos db
```
```
