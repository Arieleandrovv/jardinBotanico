
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowListPlants from './components/ShowListPlants';
import Plant from './components/RegisterPlant';
import Home from './components/Home';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const isAuthenticated = localStorage.getItem('token');

  return (
    
      <Router>

            <Routes>
            <Route path="/" element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/plantas' element={<ShowListPlants />} />
              <Route path='/registroPlanta' element={<Plant />} />
            </Routes>
      </Router>
  );
}

export default App;
