import React from "react";
import "../../styles/navigation.css";

const FooterExUser = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="text-white">Horario</p>
                        <p className="text-white">Lunes-Viernes</p>
                        <p className="text-white">9:00 - 16:30</p>
                        <p className="text-white">Sábado</p>
                        <p className="text-white">10:00 - 16:30</p>
                    </div>
                    <div className="col">
                        <p className="text-white">Contacto</p>
                        <p className="text-white">62998028</p>
                        <p className="text-white">informaciones.jardin.botanico@gmail.com</p>
                    </div>
                    <div className="col">
                        <p className="text-white">Jardín Botánico</p>
                        <p className="text-white">C. R. Rivero Torrez 1630,</p>
                        <p className="text-white">Cochabamba</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterExUser;
