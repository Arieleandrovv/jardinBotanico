
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Plant from './pages/RegisterPlant';
function App() {
  
  return (
    <div className="App">
      
       <BrowserRouter>
       <Link to="/contact"> nuevo contacto</Link>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/RegistroPlanta' element={ <Plant/>} />
        </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
