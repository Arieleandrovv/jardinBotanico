
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowListPlants from './components/ComponentsExternalUser/ShowListPlants';
import Plant from './components/ComponentsAdminUser/RegisterPlant';
import Home from './components/ComponentsExternalUser/Home';
import EditPlant from './components/EditPlant';
import ShowPlant from './components/ComponentsAdminUser/ShowPlant';
import 'bootstrap/dist/css/bootstrap.css';
function App() {

  return (
    
      <Router>

            <Routes>
            <Route path="/" element={<Home />} />
              <Route path='/plantas' element={<ShowListPlants />} />
              <Route path='/registroPlanta' element={<Plant />} />
              <Route path='/editarPlanta/:id' element={<EditPlant />} />
              <Route path='/planta/:id' element={<ShowPlant />} />
            </Routes>
      </Router>
  );
}

export default App;
