require('dotenv').config()
const express = require ('express')
const morgan = require ("morgan")
const cors = require ("cors")
const Person = require('./models/person')

morgan.token('body', function getBody (req) {
    return JSON.stringify(req.body)
  })

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(morgan(':method :url :response-time :body'))
app.use(cors())




app.get("/api/persons", (request, response) => {
    Person.find({}).then(persons => response.json(persons))
})


app.post("/api/persons", (request, response, next) => {
    const body = request.body
    if (!body) {
        return response.status(400).json ({"error": "No information was provided"})
    }
    if (!body.name) {
        return response.status(400).json ({"error": "No name was provided"})
    }
    if (!body.number) {
        return response.status(400).json ({"error": "No number was provided"})
    }
    
    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedPerson => response.json(savedPerson))
    .catch(error => next(error))
    })


app.put("/api/persons/:id", (request, response, next) => {
    const body = request.body
    const person = {
      name: body.name,
      number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
  })

app.get("/info", (request, response, next) => {
Person.countDocuments({}).exec((err, count) => {
        if (err) {
            next(err);
        }
        response.send(`Phonebook has info for ${count} people <br> ${new Date()}`) 
    })
    });

app.get("/api/persons/:id", (request, response, next) =>{
    Person.findById(request.params.id)
    .then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(404).end()
        }
    }
)
.catch (error => next(error))
})

app.delete("/api/persons/:id", (request,response, next) => {
  Person.findByIdAndRemove(request.params.id)
  .then ( result => response.status(204).end())
  .catch (error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  

  app.use(unknownEndpoint)
  const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({error: 'malformatted id'})
    }
    else if (error.name === "ValidationError" ) {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}
  app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running in on port: ${PORT}`))
