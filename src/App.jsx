import { useEffect, useState } from 'react';
import './App.css'
import Person from './components/Person';
import RouterApp from './Router';

const data = [
  {
    name: 'Jotaa',
    age: 31
  },
  {
    name: 'Tomy',
    age: 29
  },
];

const App2 = () => {
  
  const [getPersons, setPersons] = useState([]);

  useEffect(() => {
    console.log('useEffect')
    const timeout = setTimeout(() => {
      setPersons([...data])
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const addPerson = () => {
    setPersons((prevState) => [...prevState, {name: 'New person', age: 20}]);
  }

  return (
      <div>
        {
        getPersons.map((person) => (<Person key={person.name} data={person} />))
        }

        <button onClick={addPerson}>Add person</button>
        
      </div>
      
  )
}

const App = () => <RouterApp />

export default App
