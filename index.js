const express = require ('express')
const morgan = require ("morgan")
const cors = require ("cors")
const path = require ("path")

morgan.token('body', function getBody (req) {
    return JSON.stringify(req.body)
  })

const app = express()

app.use(express.json())
app.use(morgan(':method :url :response-time :body'))
app.use(cors())
app.use(express.static('build'))


let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "345-431-3124",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
]



const generateId = () => Math.floor(Math.random() * 1000000000)

app.get("/", (request,response) =>  response.sendFile(path.join(__dirname, 'build/index.html')))

app.get("/api/persons", (request, response) => {
    response.json(persons)
})


app.post("/api/persons", (request, response) => {
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
    const names = persons.map (person => person.name)
    if (names.findIndex((name) => name === body.name) !== -1) {
        return response.status(400).json ({"error": "Name must be unique"}) 
    }
    const person = {
        name: body.name,
        number: body.number,
        id : generateId()
    }
    persons = persons.concat(person)
    response.json(person)
})
app.get("/info", (request, response) => {
    response.send(`Phonebook has info for ${persons.length} people <br> ${new Date()}`) 
})

app.get("/api/persons/:id", (request, response) =>{
    const id = Number(request.params.id)
    const person = persons.find (n => n.id === id)
    person ? response.json(person) : response.status(404).end()
})

app.delete("/api/persons/:id", (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter (n => n.id !== id)
    response.status(204).end()
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server is running in on port: ${PORT}`))
