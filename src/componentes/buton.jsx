function Boton({ onClick, children }) {
  return (
    <button onClick={onClick} className="boton">
      {children}
    </button>
  );
}

export default Boton;