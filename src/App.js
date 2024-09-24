import Navbar  from './components';
import { Home, About, Services, WebDev, Contact, Login, SignUp } from './pages';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        

        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/webdev' element={<WebDev />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      
    </div>
  );
}

export default App;
