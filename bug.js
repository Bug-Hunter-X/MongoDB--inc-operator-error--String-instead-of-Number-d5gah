```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({ _id: ObjectId('...') }, { $inc: { field: 'value' } });
```