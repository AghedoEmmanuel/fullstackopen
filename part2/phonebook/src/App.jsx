import { useState, useEffect } from "react"
import {Filter, Person, PersonForm} from './Components'
import PhoneBook from "./services/phoneBook"

const App = () => {

  const [persons,setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const[newNumber,setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  const handleNameChange=(e)=>{
    setNewName(e.target.value)
  }

  const handleNumberChange=(e)=>{
    setNewNumber(e.target.value)
  }

  const handleFilteredName=(e)=>{
    setFilteredName(e.target.value)
  }


  useEffect(()=>{
    PhoneBook
    .get()
    .then(InitialPersons =>setPersons(InitialPersons))
  },[])

  const addName = (e)=>{
    e.preventDefault()
    const personObject = {
      name:newName,
      number:newNumber,
      important:Math.random()<0.5,
      id:persons.length + 1,
    }
    const existingPerson = persons.find(person=>person.name.toLowerCase() === newName.toLowerCase())

    if(existingPerson){
    
    if (window.confirm(`${newName} is already added to phonebook, do you want to replace the old number with a new number?`)){
       PhoneBook
       .update(existingPerson.id,{...existingPerson, number:newNumber})
       .then(response=>{
        setPersons(persons.map(person=>person.id !== existingPerson.id ? person :response.data))
       })
       .catch(error =>{
        console.error('Error updating person',error)
       })
    }else{
      PhoneBook
      .create(personObject)
      .then(returnedPerson=>{
        setPersons(persons.concat(returnedPerson))
      })
    }
    setNewName('')
    setNewNumber('')
  }}

  const deleteInfo = (id) =>{
   if(window.confirm(`Delete ${setPersons}`)){
    PhoneBook
    .remove(id)
    .then(()=>{
      setPersons(persons.filter(person=>person.id !== id))
    })
    .catch(error => {
      console.error('Error Occured while deleting file:',error)
    })
   }
  }

  const filteredPersons = persons.filter(person=>person.name.toLowerCase().includes(filteredName.toLowerCase()))

  return (
    <div>
    
       <h2>PhoneBook</h2>
   <Filter 
    filteredName={filteredName}
    handleFilteredName={handleFilteredName}
   />
    <h3>add a new</h3>

   <PersonForm 
   newName={newName} 
   handleNameChange={handleNameChange} 
   handleNumberChange={handleNumberChange} 
   newNumber={newNumber} 
   addName={addName}/>

    <h2>Numbers</h2>
   <Person filteredPersons={filteredPersons} deleteInfo={deleteInfo}/>

    </div>
  )
}

export default App