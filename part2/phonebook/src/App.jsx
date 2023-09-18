import { useState } from 'react'


function App() {

  const [persons, setPersons] = useState([{ name: 'Artos Hellas', number: '040-123456', id: 1 }])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const isDuplicate = persons.some((person) => person.name === newName)
    if (isDuplicate) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const nameobj = {
        name: newName,
        number: newNumber,
        important: Math.random() < 0.5,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameobj))
      setNewName('')
      setNewNumber('')
    }
  }

  const addName = (e) => {
    setNewName(e.target.value)
  }

  const addNumber =(e)=>{
    setNewNumber(e.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={addName} /></div>
        <div>number: <input value={newNumber} onChange={addNumber} /></div>
        <div><button type='submit'>add</button></div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person => (<p key={person.id}>{person.name} {person.number}</p>))}</div>
    </>
  )
}

export default App
