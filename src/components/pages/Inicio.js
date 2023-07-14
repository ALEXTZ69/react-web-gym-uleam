import React from 'react';
import Footer from '../../Footer'


const Inicio = () => {
  return (
    <div className="container" style={styles.container}>
      <div className="grid-container">
        <h1 style={styles.title}>¡Bienvenido a ULEAM GYM</h1>
        <img src="./inicio1.jpg" alt="Imagen de bienvenida" style={styles.image} />
        <p style={styles.description}>
        Estamos encantados de darte la bienvenida al Gimnasio Universitario, el lugar perfecto para mantener un estilo de vida activo y saludable mientras estudias en nuestra universidad.
      </p>
      <p style={styles.description}>
        Nuestras modernas instalaciones cuentan con equipos de última generación, un equipo de profesionales altamente capacitados y una amplia variedad de clases y actividades para todos los niveles de condición física.
      </p>
      <p style={styles.description}>
        Ya sea que desees levantar pesas, hacer cardio, practicar yoga o participar en clases grupales, encontrarás todo lo que necesitas para alcanzar tus metas de acondicionamiento físico y bienestar.
      </p>
      <p style={styles.description}>
        ¡Únete a nuestra comunidad activa y descubre una nueva forma de vivir tu vida universitaria en plenitud! Estamos aquí para apoyarte en tu viaje hacia una vida más saludable y activa.
      </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Inicio;

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
    padding: '0 20px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '600px',
    height: 'auto',
    objectFit: 'cover',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    textAlign: 'justify',
    lineHeight: '1.5',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Dos columnas con ancho igual
    gridGap: '20px', // Espacio entre elementos
    alignItems: 'center', // Centra verticalmente los elementos
  },
};