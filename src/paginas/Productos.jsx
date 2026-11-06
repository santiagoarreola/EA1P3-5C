import { useState } from "react";
import Tarjeta from "../componentes/Tarjeta";
import Button from "../componentes/buton";
import Modal from "../componentes/modal";

function Productos() {
    const [mostrar, setMostrar] = useState(false);
    const [producto, setProducto] = useState("");

    function mostrarModal(nombre) {
        setProducto(nombre);
        setMostrar(true);
    }

    function cerrarModal() {
        setMostrar(false);
    }

    return (
        <main>
            <h1>Productos</h1>
            <div className="contenedor">
                <Tarjeta imagen="/productos/audifonos.svg" titulo="Audífonos" descripcion="Escucha tu música favorita con comodidad.">
                    <Button onClick={() => mostrarModal("Audífonos")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/teclado.svg" titulo="Teclado" descripcion="Escribe y realiza tus tareas fácilmente.">
                    <Button onClick={() => mostrarModal("Teclado")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/mouse.svg" titulo="Mouse" descripcion="Controla tu computadora con precisión.">
                    <Button onClick={() => mostrarModal("Mouse")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/monitor.svg" titulo="Monitor" descripcion="Una pantalla para estudiar y jugar.">
                    <Button onClick={() => mostrarModal("Monitor")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/bocina.svg" titulo="Bocina" descripcion="Disfruta de tu música en cualquier lugar.">
                    <Button onClick={() => mostrarModal("Bocina")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/camara.svg" titulo="Cámara web" descripcion="Participa en tus clases y videollamadas.">
                    <Button onClick={() => mostrarModal("Cámara web")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/microfono.svg" titulo="Micrófono" descripcion="Graba tu voz y habla con tus amigos.">
                    <Button onClick={() => mostrarModal("Micrófono")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/control.svg" titulo="Control" descripcion="Disfruta tus videojuegos favoritos.">
                    <Button onClick={() => mostrarModal("Control")}>Seleccionar</Button>
                </Tarjeta>
                <Tarjeta imagen="/productos/laptop.svg" titulo="Laptop" descripcion="Lleva tus tareas y proyectos contigo.">
                    <Button onClick={() => mostrarModal("Laptop")}>Seleccionar</Button>
                </Tarjeta>
            </div>
            {mostrar && (
                <Modal>
                    <h2>Producto seleccionado</h2>
                    <p>Seleccionaste: {producto}. Tu selección fue confirmada.</p>
                    <Button onClick={cerrarModal}>Aceptar</Button>
                </Modal>
            )}
        </main>
    );
}

export default Productos;
