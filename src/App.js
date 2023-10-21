import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Filtermenu from './Pages/components/Filtermenu';
import Preloader from './Pages/Preloader';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Error from './Pages/Error';

function App() {

  const [loader, setLoader] = useState(false)

  setTimeout(() => {
    setLoader(true)
  }, 2000)

  return (
    <>

      {
        loader ? <div>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Filtermenu />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/signup' exact element={<Signup />} />
            <Route path='*' exact element={<Error />} />

          </Routes>
        </div> : <Preloader />
      }
    </>

  );
}

export default App;
