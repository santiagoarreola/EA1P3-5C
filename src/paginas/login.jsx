import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../componentes/buton';
import '../login.css';

function Login() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function iniciarSesion(evento) {
        evento.preventDefault();
        if (!correo.trim() || !contrasena.trim()) {
            setError('Por favor, completa todos los campos.');
            return;
        }
        setCorreo('');
        setContrasena('');
        navigate('/');
    }

    return (
        <main className="pagina-login">
            <section className="marco-login" aria-labelledby="tituloLogin">
                <div className="tarjeta-login">
                    <nav className="pestanas-login" aria-label="Acceso de usuarios">
                        <Link className="pestana-activa" to="/login" aria-current="page">Iniciar sesión</Link>
                        <Link to="/registro">Registrarse</Link>
                    </nav>
                    <h1 id="tituloLogin">Bienvenido</h1>
                    <p className="subtitulo-login">Inicia sesión con tu cuenta institucional</p>
                    <form className="login formulario-login" onSubmit={iniciarSesion}>
                        <label className="etiqueta-oculta" htmlFor="correoLogin">Correo electrónico</label>
                        <input id="correoLogin" type="email" autoComplete="email" required
                            placeholder="Correo electrónico" value={correo}
                            onChange={(evento) => setCorreo(evento.target.value)} />
                        <label className="etiqueta-oculta" htmlFor="contrasenaLogin">Contraseña</label>
                        <input id="contrasenaLogin" type="password" autoComplete="current-password" required
                            placeholder="Contraseña" value={contrasena}
                            onChange={(evento) => setContrasena(evento.target.value)} />
                        {error && <p className="error-login" role="alert">{error}</p>}
                        <Button>Iniciar sesión</Button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;
