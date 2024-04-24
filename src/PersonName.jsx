import { Link, useNavigate, useParams } from "react-router-dom";
import Person from "./components/Person";

const PersonName = () => {
  let { name } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <Person data={{ name, age: 20 }} />
      <button onClick={() => navigate('/')}>Click me</button>
      <Link to="/asd"> Link</Link>
    </>
  )
}

export default PersonName;