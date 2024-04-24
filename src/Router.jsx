import { BrowserRouter, Route, Routes } from "react-router-dom";
import Person from "./components/Person";
import PersonName from "./PersonName";

const RouterApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/asd" element={<Person data={{ name: 'jota', age: 310 }} />} /> 
      <Route path="/" element={<Person data={{ name: 'tomy', age: 20 }} />} /> 
      <Route path="/:name" element={<PersonName />} /> 
      <Route path="/*" element={<Person data={{ name: 'tomy2', age: 20 }} />} /> 
    </Routes>
  </BrowserRouter>
);

export default RouterApp