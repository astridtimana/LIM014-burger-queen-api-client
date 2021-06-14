import React from 'react';
import logoBurgerQueen from '../images/BQ-logo.svg';
import comboBQ from '../images/burger-combo.png';
import '../style/main.scss'
// import { useState } from 'react';

function LogIn (){

  // const handleChange = e => {
    // const [email, cambiarEmail] = useState({campo:'', valido:null});
    // const [password, cambiarPassword] = useState({campo:'', valido:null});
    // const objeto = {
    //   email:'',
    //   password:'',
    // };
    // const valor = e.target.value;
    // const nombre = e.target.name
  // }

  // const expresiones = {
	// 	password: /^.{6,12}$/, // 4 a 12 digitos.
	// 	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// };
      return (
      <div className="logIn">
        <header className="logIn-header">
        <img src={logoBurgerQueen} className="bQ-logIn" alt="logo" />
          <form className="logIn-form">
            <label>
              Correo electrónico:
              <input 
              type="email" 
              name="email"
              leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
              /*onChange={handleChange}*/
              className="inputLogIn"/>
            </label>
            <label>
              Contraseña:
              <input 
              type="password"
              name="password"
              placeholder
              leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
              /*onChange={handleChange}*/
              className="inputLogIn"/>
            </label>
            <button className="logIn-button"> INGRESAR </button>
          </form>
        </header>
        <img src={comboBQ} className="bQ-combo" alt="logo" />
      </div>
    );
  }
  
export default LogIn;
  