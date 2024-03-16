import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AddStudent from './components/pages/AddStudent';
import ImageUploader from './components/ImageUploader';
import AddStudent1 from './components/pages/AddStudent1';
import AddPatient from './components/pages/AddPatient';
import AddPatient1 from './components/pages/AddPatient1';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/pages/AddStudent' element={<AddStudent />}></Route>
            <Route exact path='/pages/AddStudent1' element={<AddStudent1 />}></Route>
            <Route exact path='/pages/AddPatient' element={<AddPatient />}></Route>
            <Route exact path='/pages/AddPatient1' element={<AddPatient1 />}></Route>
            

            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
