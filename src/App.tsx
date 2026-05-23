import './App.css'
import lawyerImage from './images/abogada.jpeg'
import { motion } from "framer-motion"
import { Scale, FileText, Landmark, Phone, ShieldCheck, Gavel } from "lucide-react"

export default function App() {
  return (
    <div className="app">

      {/* HERO */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container hero-content">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="subtitle">Defensa Legal Profesional</p>

            <h1>
              Abogada Penalista
            </h1>

            <p className="name">
              Zaitmar Aguirre
            </p>

            

            <p className="description">
              Defensa legal confiable y profesional.
              Comprometidos con la protección de los derechos
              y garantías de cada cliente.
            </p>

            <div className="buttons">
              <button className="primary-btn">Consulta Legal</button>
              <button className="secondary-btn">Servicios</button>
            </div>
          </motion.div>

          <motion.img
            src={lawyerImage}
            alt="Abogada"
            className="hero-image"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        className="services"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <p className="subtitle">Servicios</p>
          <h2>Servicios legales especializados</h2>

          <div className="cards">
            {[
              { icon: <Scale />, text: "Defensa en procesos penales" },
              { icon: <FileText />, text: "Asesoría jurídica" },
              { icon: <Landmark />, text: "Asistencia en tribunales" },
              { icon: <Phone />, text: "Consultas legales" },
              { icon: <Gavel />, text: "Casos de detención" },
              { icon: <ShieldCheck />, text: "Medidas cautelares" },
            ].map((service, index) => (
              <motion.div
                className="card"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="icon-pro">
                  {service.icon}
                </div>
                <h3>{service.text}</h3>
                <p>Atención profesional y estratégica para cada caso legal.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHY US */}
      <motion.section
        className="why-us"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container center">

          <p className="subtitle">¿Por qué elegirnos?</p>
          <h2>Compromiso, confidencialidad y experiencia</h2>

          <div className="cards">
            {[
              "Atención personalizada",
              "Confidencialidad",
              "Responsabilidad y compromiso",
              "Experiencia en derecho penal",
            ].map((item, index) => (
              <motion.div
                className="card"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3>{item}</h3>
                <p>Brindamos un servicio profesional enfocado en proteger tus derechos.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CONTACTO */}
      <motion.section
        className="contact-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">

          <div className="contact-card">

            <div className="contact-item">
              <h4>📍 Dirección</h4>
              <p>Valencia, Venezuela</p>
            </div>

            <div className="contact-item">
              <h4>📞 Teléfono</h4>
              <p>+58 412-0000000</p>
            </div>

            <div className="contact-item">
              <h4>✉️ Correo</h4>
              <p>Zaitmaraguirre08@gmail.com</p>
            </div>

          </div>

          <p className="quote">
            “La justicia comienza con una buena defensa.”
          </p>

        </div>
      </motion.section>

    </div>
  )
}