import React , {useState} from 'react'
import { Formik } from 'formik'
import firebase from 'firebase/app'
import 'firebase/firestore'
import './Boton.css'

firebase.initializeApp({
	apiKey: 'AIzaSyDQ4PC0gAVASfaB2tyvPnWDKOhghtWCKNw',
  	authDomain: 'gymfirebase-fe247-default-rtdb.firebaseio.com',
  	projectId: 'gymfirebase-fe247',
});
const db = firebase.firestore();

const Formulario = () => {

	const[FormularioEnviado, cambiarFormularioEnviado] = useState(false);

	const guardarFormularioEnFirebase = async (valores) => {
    try {
      // Guardar los valores del formulario en Firebase Firestore
      await db.collection('formularios').add(valores);
      console.log('Formulario guardado en Firebase Firestore');
    } catch (error) {
      console.error('Error al guardar el formulario en Firebase Firestore:', error);
    }
  };

	return (
		<div>
			<h1>Formulario de Inscripcion del Gym</h1>
			<Formik
				initialValues={{
					nombre: '',
					apellido: '',
					cedula: '',
					celular: '',
					plan:'',
					correo: ''
				}}
				validate={(valores)=>{
					let errores = {};

					if(!valores.nombre){
						errores.nombre='por favor ingrese su nombre'
					}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre='este campo solo puede contener letras y espacios'
					}

					if(!valores.apellido){
						errores.apellido='por favor ingrese su apellido'
					}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
						errores.apellido='este campo solo puede contener letras y espacios'
					}

					if(!valores.cedula){
						errores.cedula='por favor ingrese un numero de cedula'
					}else if(!/^\d{10}$/.test(valores.cedula)){
						errores.cedula='este campo debe contener 10 numeros'
					}

					if(!valores.celular){
						errores.celular='por favor ingrese un numero de celular'
					}else if(!/^\d{10}$/.test(valores.celular)){
						errores.celular='este campo solo puede contener numeros'
					}

					if (!valores.plan) {
						errores.plan = 'Debe seleccionar una opción';
					  }

					if(!valores.correo){
						errores.correo='por favor ingrese un correo'
					}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo='el correo solo puede contener letras, numeros, puntos y guiones'
					}


					return errores;
				}}
				onSubmit={async(valores, {resetForm})=>{
					resetForm();
					alert('Formulario Enviado Exitosamente');
					cambiarFormularioEnviado(true);
					setTimeout(() =>cambiarFormularioEnviado(false), 5000);
					await guardarFormularioEnFirebase(valores);
				}}
			>
				{({values, handleSubmit, touched, errors, handleChange, handleBlur})=>(
					<form className='formulario' onSubmit={handleSubmit}>
						<div>
							<label htmlFor='nombre'>Nombre</label>
							<input type='text' id='nombre' name='nombre' placeholder='Victoria' 
							value={values.nombre} onChange={handleChange} onBlur={handleBlur}/>
							{touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
						</div>
						<div>
							<label htmlFor='apellido'>Apellido</label>
							<input type='text' id='apellido' name='apellido' placeholder='Marcos'
							value={values.apellido} onChange={handleChange} onBlur={handleBlur}/>
							{touched.apellido && errors.apellido && <div className='error'>{errors.apellido}</div>}
						</div>
						<div>
							<label htmlFor='cedula'>Cedula</label>
							<input type='text' id='cedula' name='cedula' placeholder='2450666666'
							value={values.cedula} onChange={handleChange} onBlur={handleBlur}/>
							{touched.cedula && errors.cedula && <div className='error'>{errors.cedula}</div>}
						</div>
						<div>
							<label htmlFor='celular'>Celular</label>
							<input type='text' id='celular' name='celular' placeholder='0987654321'
							value={values.celular} onChange={handleChange} onBlur={handleBlur}/>
							{touched.celular && errors.celular && <div className='error'>{errors.celular}</div>}
						</div>
						<div>
							<label htmlFor='plan'>Plan</label>
							<select as='select' id='plan' name='plan' 
							value={values.plan} onChange={handleChange} onBlur={handleBlur}>
								<option value='' >Seleccionar un plan</option>
								<option value='mensual'>MENSUAL	------------------	$20</option>
								<option value='anual'>ANUAL	---------------------	$180</option>
								<option value='premium-mensual'>PREMIUM MENSUAL	------	$30</option>
								<option value='premium-anual'>PREMIUM ANUAL	---------	$299</option>
							</select>
							{touched.plan && errors.plan && <div className='error'>{errors.plan}</div>}
						</div>
						<div>
							<label htmlFor='correo'>Correo</label>
							<input type='text' id='correo' name='correo' placeholder='correo@ejemplo.com'
							value={values.correo} onChange={handleChange} onBlur={handleBlur}/>
							{touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
						</div>

						<button type='submit' style={{ backgroundColor: 'green', color: 'white' }}>Enviar</button>
						{FormularioEnviado && <p className='exito'> Formulario enviado con Exito!</p>}
					</form>
				)}				
			</Formik>			
		</div>
	)
}

export default Formulario;
