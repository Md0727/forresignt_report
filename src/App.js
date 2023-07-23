import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate   
} from 'react-router-dom';

import Home from './pages/Home';
import Appraisal from './pages/Appraisal';
import HomeInspection from './pages/HomeInspection';
import Inspection from './pages/Inspection';
import Login from './pages/Login';
import AccessReport from './pages/AccessReport';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appraisal' element={<Appraisal />} />
        <Route path='/home-inspectionsd' element={<HomeInspection />} />
        <Route path='/inspection' element={<Inspection />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/access-report' element={<AccessReport />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
