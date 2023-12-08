
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowListPlants from './pages/ShowListPlants';
import Plant from './pages/RegisterPlant';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  
  return (
    <div className="App">
      
       <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowListPlants/>} />
          <Route path='/RegistroPlanta' element={ <Plant/>} />
        </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
