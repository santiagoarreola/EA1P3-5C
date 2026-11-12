import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Preguntas from './paginas/Preguntas';
import Productos from './paginas/Productos';
import Header from './componentes/Header';
import Login from './paginas/login';
import Registro from './paginas/Registro';

function App() {
  return (
 <>
 <BrowserRouter>
    <Header />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/preguntas" element={<Preguntas />} />
     <Route path="/productos" element={<Productos />} />
     <Route path="/login" element={<Login />} />
     <Route path="/registro" element={<Registro />} />
   </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
