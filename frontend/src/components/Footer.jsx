import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className='container'>
                <nav className='row'>
                    <p className="mb-2">© 2024 Deportes+. Todos los derechos reservados.</p>
                    <p>
                        <a href="#terminos" className="text-white text-decoration-none me-3">
                            Términos y Condiciones
                        </a>
                        <a href="#privacidad" className="text-white text-decoration-none">
                            Política de Privacidad
                        </a>
                    </p>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
