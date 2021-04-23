import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import { useState } from 'react'
import * as yup from 'yup'
import schema from './Components/Schema'
import axios from 'axios'


function App() {
  const [users, setUsers] = useState([])
  

  
  const intialValue = {
    username:'',
    email:'',
    password:'',
    term: false,
  }
  const initialError = {
    username:'',
    email:'',
    password:'',
  };
  const [errors, setError] = useState(initialError)
  const [value, setValue] = useState(intialValue)
  const [newMember, setNewMember] = useState([])
  const submitForm = () => {
    const newMember = {
      username: value.username,
      email: value.email,
      password: value.password,
      ToS: ['ToS'].filter(accept => value[accept]),


    }
    postNewMember(newMember);

  }
  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {

      })
      .catch((err) => {
       setError({...errors, [name]: err.errors[0]})
      });
    setValue(
      {
      ...value,[name]: value,
    });
  };

  const postNewMember = (info) => {
    axios
    .post('https://reqres.in/api/users', newMember)
    .then(res => {
      setNewMember([...newMember, info])
      setValue(intialValue)
      console.log(res)
    })
    .catch((err) => {
    console.log(err)
    })
    

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form values={value} submit={submitForm} change={inputChange} error={errors}/>
      </header>
    </div>
  );
}

export default App;
