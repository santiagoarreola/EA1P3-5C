function Modal({children}){
        return(
            <div className="modal">
                <div className="contenidoModal">
                    {children}
                </div>
            </div>
        )
}

export default Modal;