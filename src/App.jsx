import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio'
import Proyectos from './Proyectos/Proyectos'
import Menu from './Menu/Menu'
import SobreMi from './SobreMi/SobreMi'
import './App.css'


function App() {
  
 return (
    <div>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Proyectos' element={<Proyectos />}/>
        <Route path='/SobreMi' element={<SobreMi />}/>
      </Routes>
    </div>
  )
}

export default App;
