
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowListPlants from './components/ShowListPlants';
import Plant from './components/RegisterPlant';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  
  return (
    <div className="App">      
       <BrowserRouter>
        <Routes>        
          <Route path='/plantas' element={ <ShowListPlants/>} />
          <Route path='/registroPlanta' element={ <Plant/>} />
        </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
