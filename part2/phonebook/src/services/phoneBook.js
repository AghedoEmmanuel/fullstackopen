import axios from 'axios'
const baseURL = "http://localhost:3001/persons"

const get = () =>{
    return  axios
    .get(baseURL) 
    .then(response => response.data)
    .catch(() =>{
        alert(`${baseURL} is not sending any information`)
    })
}

const create = (newPersons,setPersons) =>{
    return axios
    .post(baseURL,newPersons)
    .then(response =>{
        setPersons(prevpersons =>prevpersons.concat(response.data))
        return response.data
    })
    .catch (error =>{
        console.log('An Error occured:',error)
        throw error
    })
}

const update = (id,updatedPersons) =>{
    return axios
    .put(`${baseURL}/${id}`,updatedPersons)
    .then((response) =>{
        response.data
    })
}

const remove = (id, setPersons) =>{
    return axios
    .delete(`${baseURL}/${id}`)
    .then(() => {
        setPersons(prevpersons => prevpersons.filter(person => person.id !== id))
        console.log('I got here')
    })
    .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
}

export default{
    get ,create,update,remove  
}