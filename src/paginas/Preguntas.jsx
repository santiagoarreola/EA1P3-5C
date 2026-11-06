import { useState } from "react";
import Button from "../componentes/buton";
import Modal from "../componentes/modal";
import './formulario.css';

function Preguntas() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [mostrar, setMostrar] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");

    function enviarFormulario(evento) {
        evento.preventDefault();

        if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
            setMensajeModal("Por favor, completa todos los campos.");
        } else {
            setMensajeModal("Tu información se envió correctamente.");
            setNombre("");
            setCorreo("");
            setMensaje("");
        }

        setMostrar(true);
    }

    function cerrarModal() {
        setMostrar(false);
    }

    return (
        <main>
            <h1>Preguntas</h1>
            <form className="formulario" onSubmit={enviarFormulario} noValidate>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)} />

                <label htmlFor="correo">Correo electrónico</label>
                <input id="correo" type="email" value={correo}
                    onChange={(evento) => setCorreo(evento.target.value)} />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" rows="4" value={mensaje}
                    onChange={(evento) => setMensaje(evento.target.value)} />

                <Button>Enviar</Button>
            </form>

            {mostrar && (
                <Modal>
                    <h2>Formulario</h2>
                    <p>{mensajeModal}</p>
                    <Button onClick={cerrarModal}>Aceptar</Button>
                </Modal>
            )}
        </main>
    );
}

export default Preguntas;
