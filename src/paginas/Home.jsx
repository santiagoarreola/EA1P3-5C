import { useState } from "react";
import Button from "../componentes/buton";
import Modal from "../componentes/modal";

function Home() {
    const [mostrar, setMostrar] = useState(false);

    function cerrarModal() {
        setMostrar(false);
    }

    function mostrarModal() {
        setMostrar(true);
    }

    return(
        <main>
            <h1>Home</h1>
            <Button onClick={mostrarModal}>Abrir modal</Button>

            {mostrar && (
                <Modal>
                    <h2>Bienvenido</h2>
                    <p>Este es el contenido del modal.</p>
                    <Button onClick={cerrarModal}>Aceptar</Button>
                </Modal>
            )}
        </main>
    )
}

export default Home;
