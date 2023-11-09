const express = require("express");
const app = express();

app.use(express.json());

const date = Date();

const generateId = () =>{
  const maxId = phonebook.length > 0 
  ? Math.random(...phonebook.map(n => n.id)) :0
  return maxId + 1
}

let phonebook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(phonebook);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const name = phonebook.find(name => 
    {
    // console.log(name.id, typeof name.id, id, typeof id, name.id ==id )

      return name.id===id})
  console.log(name)
  if (name){
    res.json(name);
  }else{
    res.status(404).end()
  }
});

app.get("/api/info", (req, res) => {
  const len = phonebook.length;
  const response = `Phonebook has info for ${len} people <br> ${date}`;
  res.send(response);
});

app.post('api/persons', (req,res) =>{
const body = req.body

if(!body.content){
  res.status(400).send({error:"missing content"})
}

const book = {
  content:body.content,
  important:body.important || false,
  id:generateId()
}
phonebook = phonebook.concat(book)
res.json(phonebook)
})

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const name = phonebook.find(name =>  name.id===id)
  res.status(204).send({error:'Message deleted'})
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
