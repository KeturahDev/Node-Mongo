const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'myProjectsName'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log("unable to connect to database")
  } 

  console.log("connecvted correctly")
})