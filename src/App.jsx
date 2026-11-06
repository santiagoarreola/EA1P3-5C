import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Preguntas from './paginas/Preguntas';
import Productos from './paginas/Productos';
import Header from './componentes/Header';

function App() {
  return (
 <>
 <BrowserRouter>
    <Header />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/preguntas" element={<Preguntas />} />
     <Route path="/productos" element={<Productos />} />
   </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
