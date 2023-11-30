
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Contactos from './pages/Contactos';
function App() {
  
  return (
    <div className="App">
      
       <BrowserRouter>
       <Link to="/contact"> nuevo contacto</Link>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/contact' element={ <Contactos/>} />
        </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
