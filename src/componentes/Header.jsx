import { Link } from 'react-router-dom';
import './haederstyles.css';
import { UserRound } from 'lucide-react';

function Header() {
  return (
    <header>
      <h1>Santiago Arreola</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/preguntas">Dudas</Link>
        <Link to="/login" aria-label="Iniciar sesión" title="Iniciar sesión"><UserRound size={22} /></Link>
      </nav>
    </header>
  );
}

export default Header;
