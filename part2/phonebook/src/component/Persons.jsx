import Delete from "./Delete"

const Persons = ({persons, setPersons}) => {
//   const handleDelete = (id) =>{
// setPersons(prevpersons => prevpersons.filter(person => person.id !==id))
//   }
  return (
    <div>
    {persons.map(person => (<div key={person.id}>{person.name} {person.number} 
    <Delete id={person.id} setPersons={setPersons}/></div>))}
    </div>
  )
}

export default Persons