import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" Joaquim "}
          <a
            href="https://www.linkedin.com/in/joaquim-ventura-9a1964181/"
            target="_blank"
            rel="noreferrer"
          >

            <FaLinkedin size="18" color="#fff" />
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size="18" color="#fff" />
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
