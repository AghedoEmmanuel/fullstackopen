

const Filter = ({filteredName, handleFilteredName}) => {
  return (
    <div>filter shown with 
    <input type="text" value={filteredName} onChange={handleFilteredName}/>
    </div>
  )
}

export default Filter