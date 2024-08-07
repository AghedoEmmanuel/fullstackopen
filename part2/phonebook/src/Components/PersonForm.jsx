

const PersonForm = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return (
    
    <form onSubmit={addName}>
      <div>name: 
      <input type="text" value={newName} onChange={handleNameChange} required/>
      </div>
      <div>number: 
      <input type="text" value={newNumber} onChange={handleNumberChange} required/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    
  )
}

export default PersonForm