

const Filter = ({ handleFilterChange }) => {
    return (
        <div>
            <div>Filter : <input type='search' onChange={handleFilterChange} /></div>
        </div>
    )
}

export default Filter