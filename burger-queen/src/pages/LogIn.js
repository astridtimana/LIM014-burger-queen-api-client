import {postRequest} from '../Services/auth.js';
import React, { useState} from 'react';
import logoBurgerQueen from '../images/BQ-logo.svg';
import comboBQ from '../images/burger-combo.png';
import '../style/main.scss';
import {useHistory} from 'react-router-dom';
import userIcon from '../images/userIcon.png'
import passwordIcon from '../images/passwordIcon.png'
import jwt_decode from "jwt-decode";


function LogIn (){

  const history = useHistory();

  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
  //  console.log(event.target.name)
  //  console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }

  const traerDatos =(event) => {
    event.preventDefault() 
          postRequest(
            { 
              email:datos.email,
              password:datos.password,
            }
          )
          .then((resp)=>{
            switch (resp.status) {
              
              case 200:
                localStorage.token = resp.data.token
                window.location = '/home';
                break;

                case 400:
                  history.push('/error')
                  console.log('Email y contraseña mal escritos')
                break;

                default:
                break;
            }
            
            
          })
          // .catch((err)=>{
          //   console.error(err);  
          //   history.push('/error')
          // });
  }

      return (
        <div className="logIn" >
        <header className="logIn-header">
        <img src={logoBurgerQueen} className="bQ-logIn" alt="logo" />
          <form className="logIn-form" onSubmit={traerDatos}>
            <label>
              Correo electrónico:
              <div className="inputLogIn">
              <img src={userIcon} alt="passwordPic"/>
              <input 
              type="email" 
              name="email"
              onChange={handleInputChange }
              />
              </div>
            </label>
            <label>
              Contraseña:
              <div className="inputLogIn">
              <img src={passwordIcon} alt="userPic"/>
              <input 
              type="password"
              name="password"
              onChange={handleInputChange }/>
              </div>
            </label>
            <button className="logIn-button" > INGRESAR </button>
          </form>
        </header>
        <img src={comboBQ} className="bQ-combo" alt="logo" />
      </div>

    );
}
  
export default LogIn;
