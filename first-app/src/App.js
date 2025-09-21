import './App.css';
import AddEmployee from './components/AddEmployee';
import Employeelist from './components/Employeelist';
import UpdateEmployee from "./components/UpdateEmployee";
import Navigation from './components/Navigation';

import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>

    <Routes>
      <Route index element = { <Employeelist/> } />
      <Route path="/" element={<Employeelist/>} />
      <Route path="/addEmployee" element={<AddEmployee/>} />
      <Route path='/editEmployee/:id' element={<UpdateEmployee/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
