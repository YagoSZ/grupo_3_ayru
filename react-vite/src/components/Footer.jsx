import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer>
                <div className="logo-ayru">
                    <img src="/img/logoayru2.png" />
                </div>
                <div className="info-footer">
                    <h4>Para saber más:</h4>
                   
                    <p>Preguntas Frecuentes</p>
                    <p>Medios de Pago</p>
                    <p>Políticas de envío</p>
                </div>
                 <div className="info-footer">
                    <h4>¡Seguinos!</h4>
                    
                    <div className="icons">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;