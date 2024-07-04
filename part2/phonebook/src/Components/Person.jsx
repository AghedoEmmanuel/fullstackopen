

const Person = ({filteredPersons, deleteInfo}) => {

 

  return (
    <div>
    {filteredPersons.map(person =>
    <p key={person.id}>{person.name} {person.number}
    <button onClick={deleteInfo}>delete</button>
    </p>
    )}
  </div>
  )
}

export default Person