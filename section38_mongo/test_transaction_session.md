# mongosh で トランザクション

connect
```
docker run -it --rm mongo mongosh "mongodb://example02acxxxx"
```

## トランザクションの確認
```
show dbs
use my-mongo-01

# create
var session = db.getMongo().startSession();

# start
session.startTransaction({
    "readConcern": { "level": "snapshot" },
    "writeConcern": { "w": "majority" }
});

# insert,update,delete...
db.dogs.insertOne({name:'test', age:3})
db.dogs.deleteMany({})

# commit or abort
session.abortTransaction()
session.commitTransaction()
```

Azure Cosmos DBでは利用できない？？
