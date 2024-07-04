import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const get = () => {
  return axios
    .get(baseURL)
    .then((response) => response.data)
    .catch(() => {
      alert(`${baseURL} is not sending any information`);
    });

};


const create = (newPerson)=>{
  return axios
    .post(baseURL,newPerson)
    .then(response => response.data)
    .catch(()=>{
      alert(`${baseURL} is offline`);
    })
}

const update = (id, updatedPersons) => {
  return axios.put(`${baseURL}/${id}`, updatedPersons)
};

const remove = (id) =>{
  return axios
  .delete(`${baseURL}/${id}`)
  
}

export default {
  get,
  create,
  update,
  remove,
};

