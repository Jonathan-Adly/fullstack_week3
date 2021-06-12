const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the following as arguments: node mongo.js <password> <name> <number> to insert, node mongo.js <password> to retrieve')
    process.exit(1)
  }

  const password = process.argv[2]

  const url =
  `mongodb+srv://jonathan:${password}@cluster0.ukss7.mongodb.net/phone-app?retryWrites=true&w=majority`

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

  const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  })
  
  const Person = mongoose.model('Person', personSchema)

  if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  
  person.save().then(result => {
    console.log(`added ${person.name}, number: ${person.number} to phonebook`)
    mongoose.connection.close()
  })
  }
  else if (process.argv.length === 3) {
      Person.find({}).then(result => {
        result.forEach(entry => {
            console.log(entry)
        })
    })
  }
  else { console.log ("incorrect usage")}