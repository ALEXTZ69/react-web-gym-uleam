import React from 'react'
import Footer from '../../Footer'


const Informacion = () => {
  return (
    <div style={styles.container}>
    <h1 style={styles.title}>¡Toda la Informacion que necesitas saber!</h1>
    <img src="./informacion1.jpg" alt="Imagen de bienvenida" style={styles.image} />
    <p style={styles.description}>
      La ULEAM, siglas de la Universidad Laica Eloy Alfaro de Manabí, es una institución de educación superior ubicada en la ciudad de Manta, en la provincia de Manabí, Ecuador. Fue fundada el 18 de octubre de 1971 y lleva el nombre de Eloy Alfaro, un destacado político y líder revolucionario ecuatoriano del siglo XIX.
    </p>
    <p style={styles.description}>
      La ULEAM se caracteriza por ser una universidad laica, lo que significa que promueve la libertad de pensamiento y la autonomía académica. Ofrece una amplia gama de programas académicos en diferentes áreas del conocimiento, incluyendo ciencias de la salud, ciencias sociales, ciencias económicas y administrativas, ingenierías, ciencias ambientales, entre otras.
    </p>
    <p style={styles.description}>
      La universidad cuenta con diversas facultades y escuelas que albergan los distintos programas de estudio. Además, posee una oferta de posgrados y programas de educación continua para la formación de profesionales especializados.
    </p>
    <p style={styles.description}>
      La ULEAM se ha destacado por su compromiso con la comunidad y su enfoque en la investigación y la innovación. Ha establecido convenios con instituciones nacionales e internacionales para promover la colaboración académica y científica.
    </p>
    <p style={styles.description}>
      En cuanto a su infraestructura, la ULEAM cuenta con campus universitarios equipados con aulas, laboratorios, bibliotecas, áreas deportivas y otros espacios destinados al desarrollo académico y recreativo de sus estudiantes.
    </p>
    <p style={styles.description}>
      En resumen, la Universidad Laica Eloy Alfaro de Manabí (ULEAM) es una institución de educación superior en Ecuador, que ofrece una amplia variedad de programas académicos, promueve la investigación y la innovación, y tiene un enfoque en el servicio a la comunidad.
    </p>
    <h1 style={styles.title}>¡los mejores entrenadores!</h1>
    <img src="./informacion2.jpg" alt="Imagen de bienvenida" style={styles.image} />
    <p style={styles.description}>
        Patty trabaja de forma independiente y se especializa en ayudar a sus clientes a alcanzar sus metas de pérdida de peso y mejorar su condición física general.
        Cuando un nuevo cliente se acerca a Patty, ella comienza con una evaluación inicial exhaustiva. Realiza mediciones de peso, porcentaje de grasa corporal y mide la resistencia cardiovascular y fuerza muscular del cliente. También se sienta con el cliente para discutir sus objetivos, historial de ejercicio y cualquier limitación o lesión existente.
        Después de recopilar toda esta información, Patty diseña un programa de entrenamiento personalizado para el cliente. Esto incluye una combinación de ejercicios cardiovasculares, entrenamiento de fuerza, estiramientos y posiblemente ejercicios de equilibrio y flexibilidad. También ofrece recomendaciones nutricionales para ayudar al cliente a mantener una alimentación saludable y equilibrada.
        Durante las sesiones de entrenamiento, Patty guía y supervisa de cerca al cliente, asegurándose de que realice los ejercicios correctamente y evitando cualquier lesión. También proporciona motivación constante, alentando al cliente a superar sus límites y celebrando los logros alcanzados.
        Además de las sesiones de entrenamiento, Patty mantiene una comunicación regular con el cliente. Le brinda apoyo emocional, responde a sus preguntas y realiza ajustes en el programa de entrenamiento según los avances y necesidades individuales.
        A medida que el cliente progresa, Patty realiza evaluaciones periódicas para medir los resultados y ajustar el programa en consecuencia. Ya sea que el objetivo sea perder peso, mejorar la resistencia o desarrollar masa muscular, Ana está ahí para guiar al cliente en cada paso del camino, brindando conocimientos, motivación y apoyo constante.
    </p>
  
  <Footer/>
  </div>

)
}

export default Informacion

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
  width: '300px',
  height: 'auto',
  marginBottom: '20px',
},
description: {
  fontSize: '18px',
  color: '#666',
  textAlign: 'justify',
  lineHeight: '1.5',
},
};