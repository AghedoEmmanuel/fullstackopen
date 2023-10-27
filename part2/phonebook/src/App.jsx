import { useState, useEffect } from "react";
import Filter from "./component/Filter";
import PersonForm from "./component/personForm";
import Persons from "./component/Persons";
import phoneBook from "./services/phoneBook";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [keyCounter, setKeyCounter] = useState(1);

  const addPerson = (name, number) => {
    const existingPerson = persons.find((person) => person.name === name);
    if (existingPerson) {
      const updatePerson = { ...existingPerson, number };

      const confirm = window.confirm(
        `${name} is already added to the phonebook, replace the old number with a new number`
      );

      if (confirm) {
        phoneBook.update(existingPerson.id, updatePerson).then((data) => {
          setPersons((prevperson) => {
            prevperson.map((person) => (person.id === data.id ? data : person));
          });
          window.location.reload();
        });
      } else {
        alert("Phone number change cancelled");
      }
    } else {
      const newPersons = {
        name,
        number,
        important: Math.random() < 0.5,
        key: keyCounter,
      };
      setPersons([...persons, newPersons]);
      setNewName("");
      setNewNumber("");
      setKeyCounter(keyCounter + 1);
      phoneBook.create(newPersons).then((data) => {
        setPersons([...persons, data]);
        // console.log(data);
      });
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  // const promise = phoneBook.get()
  // promise.then(data =>{
  //   console.log(data)
  // })

  useEffect(() => {
    phoneBook.get().then((data) => {
      setPersons(data);
    });
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </>
  );
}

export default App;
