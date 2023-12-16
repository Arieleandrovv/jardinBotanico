
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowListPlants from './components/ShowListPlants';
import Plant from './components/RegisterPlant';
import Home from './components/Home';
import EditPlant from './components/EditPlant';
import 'bootstrap/dist/css/bootstrap.css';
function App() {

  return (
    
      <Router>

            <Routes>
            <Route path="/" element={<Home />} />
              <Route path='/plantas' element={<ShowListPlants />} />
              <Route path='/registroPlanta' element={<Plant />} />
              <Route path='/editarPlanta/:id' element={<EditPlant />} />
            </Routes>
      </Router>
  );
}

export default App;
