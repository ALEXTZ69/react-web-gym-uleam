import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navegation/NavBar';
import Inicio from './components/pages/Inicio'
import Informacion from './components/pages/Informacion'
import Planes from './components/pages/Planes'
import Inscripcion from './components/pages/Inscripcion'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={Inicio}/>
          <Route path='/Planes' Component={Planes}/>
          <Route path='/Informacion' Component={Informacion}/>
          <Route path='/Inscripcion' Component={Inscripcion}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
