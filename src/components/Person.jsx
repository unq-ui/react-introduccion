import '../styles/components/Person.css';

const Person = ({ data: { name, age } }) => {
  
  return (
    <div className="person">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Person;