import { useState, useEffect } from 'react'
import Filter from './component/Filter'
import PersonForm from './component/personForm'
import Persons from './component/Persons'
import axios from 'axios'


function App() {

  // const [persons, setPersons] = useState([
  //   { name: 'Artos Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (name,number) => {
    const isDuplicate = persons.some((person) => person.name === name)
    if (isDuplicate) {
      alert(`${name} is already added to the phonebook`)
    } else {
      const newPersons = {
        name,
        number,
        important: Math.random() < 0.5,
        id: persons.length + 1
      }
      setPersons([...persons,newPersons])
      setNewName('')
      setNewNumber('')
  }}

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
  person.name.toLowerCase().includes(filter.toLowerCase())
);

// const promise = axios.get('http://localhost:3001/persons')
// promise.then(response =>{
//   console.log(response.data)
// })

useEffect(()=>{
  axios
  .get('http://localhost:3001/persons')
  .then(response =>{
    setPersons(response.data)
  })
},[])

  return (
    <>
      <h2>Phonebook</h2>
     <Filter handleFilterChange={handleFilterChange}/>
        <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
     <Persons persons={filteredPersons}/>
    </>
  )
}

export default App
