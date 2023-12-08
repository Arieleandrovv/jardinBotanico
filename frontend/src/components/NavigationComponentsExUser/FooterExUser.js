import React from "react";
import "../../styles/navigation.css";

const FooterExUser = () => {
    return (
        <footer className="footer">
            { }

            <div class="container">
                <div class="row">
                    <div class="col order-last">
                        <p>Horario</p>
                        Lunes-Viernes
                        <p>9:00 - 16:30 </p>
                        Sábado
                        10:00 - 16:30
                    </div>
                    <div class="col">
                        <p>Contacto</p>
                        62998028
                        <p className="correo">informaciones.jardin.botanico@gmail.com</p>
                    </div>
                    <div class="col order-first">
                        <p>Jardin Botanico</p>
                        C. R. Rivero Torrez 1630,
                        Cochabamba
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterExUser;