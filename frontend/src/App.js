
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Plant from './pages/RegisterPlant';
function App() {
  
  return (
    <div className="App">
      
       <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/RegistroPlanta' element={ <Plant/>} />
        </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
