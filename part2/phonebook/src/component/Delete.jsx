import phoneBook from "../services/phoneBook";

function Delete({ id, setPersons,name }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm(`Delete ${name}`);

    if (confirmDelete) {
      phoneBook.remove(id, setPersons);

      window.location.reload();
    }else{
     alert('Deletion Cancelled') 
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete;
