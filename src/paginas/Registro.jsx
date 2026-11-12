import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../componentes/buton';
import Modal from '../componentes/modal';
import '../login.css';

function Registro() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function registrar(evento) {
        evento.preventDefault();
        if (!nombre.trim() || !correo.trim() || !contrasena.trim()) {
            setError('Por favor, completa todos los campos.');
            return;
        }
        setError('');
        setMostrar(true);
    }

    function aceptarRegistro() {
        setNombre('');
        setCorreo('');
        setContrasena('');
        setMostrar(false);
        navigate('/login');
    }

    return (
        <main className="pagina-login">
            <section className="marco-login" aria-labelledby="tituloRegistro">
                <div className="tarjeta-login">
                    <nav className="pestanas-login" aria-label="Acceso de usuarios">
                        <Link to="/login">Iniciar sesión</Link>
                        <Link className="pestana-activa" to="/registro" aria-current="page">Registrarse</Link>
                    </nav>
                    <h1 id="tituloRegistro">Crear cuenta</h1>
                    <p className="subtitulo-login">Regístrate con tu cuenta institucional</p>
                    <form className="login formulario-login" onSubmit={registrar}>
                        <label className="etiqueta-oculta" htmlFor="nombreRegistro">Nombre</label>
                        <input id="nombreRegistro" type="text" autoComplete="name" required
                            placeholder="Nombre" value={nombre}
                            onChange={(evento) => setNombre(evento.target.value)} />
                        <label className="etiqueta-oculta" htmlFor="correoRegistro">Correo electrónico</label>
                        <input id="correoRegistro" type="email" autoComplete="email" required
                            placeholder="Correo electrónico" value={correo}
                            onChange={(evento) => setCorreo(evento.target.value)} />
                        <label className="etiqueta-oculta" htmlFor="contrasenaRegistro">Contraseña</label>
                        <input id="contrasenaRegistro" type="password" autoComplete="new-password" required
                            placeholder="Contraseña" value={contrasena}
                            onChange={(evento) => setContrasena(evento.target.value)} />
                        {error && <p className="error-login" role="alert">{error}</p>}
                        <Button>Registrarse</Button>
                    </form>
                </div>
            </section>
            {mostrar && (
                <Modal>
                    <h2>Registro exitoso</h2>
                    <p>Tu registro se realizó correctamente.</p>
                    <Button onClick={aceptarRegistro}>Aceptar</Button>
                </Modal>
            )}
        </main>
    );
}

export default Registro;
