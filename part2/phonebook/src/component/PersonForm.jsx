
const PersonForm = ({ addPerson,newName, setNewName, newNumber, setNewNumber  }) => {

    const addName = (e) => {
        setNewName(e.target.value)
    }

    const addNumber = (e) => {
        setNewNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
          addPerson(newName,newNumber)
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>name: <input value={newName} onChange={addName} /></div>
                <div>number: <input value={newNumber} onChange={addNumber} /></div>
                <div><button type='submit'>add</button></div>
            </form>
        </div>
    )
}

export default PersonForm