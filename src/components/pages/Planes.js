import React from 'react'
import Footer from '../../Footer'


const Planes = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Planes Ofrecidos por ULEAM</h1>
      <div style={styles.imageContainer}>
        <img src="./iconomes.png" alt="Imagen de bienvenida" style={styles.image} />
        <img src="./iconoanual.png" alt="Imagen de bienvenida" style={styles.image} />
        <img src="./iconopremium.png" alt="Imagen de bienvenida" style={styles.image} />
      </div>
      <h3 >Plan mensual</h3>
      <p style={styles.description}>
        Es un plan básico que te permite acceder al gimnasio durante un mes completo pagando una cuota fija. Puedes disfrutar de todas las instalaciones y clases disponibles durante ese período.
      </p>
      <h3 >Plan Anual</h3>
      <p style={styles.description}>
        Este plan ofrece una suscripción de un año completo al gimnasio. Por lo general, estos planes tienen un descuento significativo en comparación con las suscripciones mensuales. Son ideales para personas que tienen un compromiso a largo plazo con el ejercicio.
      </p>
      <h3 >Planes premium</h3>
      <p style={styles.description}>
        Los gimnasios de lujo o de alta gama a menudo ofrecen planes premium que incluyen servicios adicionales. Esto puede incluir acceso exclusivo a áreas VIP, entrenamiento personalizado, clases especializadas o acceso a instalaciones de spa y bienestar.
      </p>
      <Footer/>

    </div>
  )
}

export default Planes

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
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  image: {
    width: '300px',
    height: 'auto',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    textAlign: 'justify',
    lineHeight: '1.5',
  },
};