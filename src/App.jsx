import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio'
import Proyectos from './Proyectos/Proyectos'
import Menu from './Menu/Menu'
import SobreMi from './SobreMi/SobreMi'
import './App.css'
import Contactame from './Contactame/Contactame'



function App() {
  
 return (
    <div>
        <Menu/>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Proyectos' element={<Proyectos />}/>
        <Route path='/SobreMi' element={<SobreMi />}/>
        <Route path='/Contactame' element={<Contactame/>} />
      </Routes>
    </div>
  )
}

export default App;
