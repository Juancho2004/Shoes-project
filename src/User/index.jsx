import React, { useState } from 'react'
// import imgLogo from './img/logo.png';
import './main.css';

const count = [
    {
      id: 0,
      button : 'Login',
    },
    {
      id: 1,
      button : 'Create account',
    }
  ];

export function User() {
  // Cambio de secciones
  const [user] = useState(count)
  const [section, setSection] = useState(0);

  // Cookies
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Holaaaaaa!')
  }
  

  return (
    <>
    <div className="user-scrim user-open">      </div>
      <section className='user'>
        <article className="user_texts">
            <h1 className='user_title'>My Account</h1>
            <h2 className='user_paragraph'>Ingresa tu correo electrónico para unirte o iniciar sesión.</h2>
        </article>

        <div className='user_btns'>
          <ul className='btns_container'>
            {user.map((tab) => (
               <li key={tab.id} onClick={()=> setSection(tab)}>{tab.button}</li>
            ))}
          </ul>
        </div>

        <div className='contenido_user'>
            {section.id === 0 ? (
                <form onSubmit={handleSubmit}>
                  <div className="form_group">
                    <input
                    id='Email'
                    className='form_input'
                    type="text" 
                    value={userName || ''}
                    name='Username'
                    placeholder=' '
                    onChange={({target}) => 
                    setUserName(target.value)}
                    />
                    <label 
                    htmlFor='Email'
                    className='form_label'
                    >Email</label>
                  </div>

                  <div className="form_group form_group--2">
                    <input 
                    id='password'
                    className='form_input'
                    type="password" 
                    value={password || ''}
                    name='Password'
                    placeholder=' '
                    onChange={({target}) => setPassword(target.value)}
                    />
                    <label 
                    htmlFor='password'
                    className='form_label'
                    >Password</label>
                  </div>
                  <div>
                    <button className='user_btn'>Login</button>
                  </div>
                </form> 
            ): (
              <div className='center'>
              <form>
                <div className="inputbox">
                  <input type="text" required="required"/>
                  <span>First Name</span>
                </div>
                <div className="inputbox">
                  <input type="text" required="required"/>
                  <span>Last Name</span>
                </div>
                <div className="inputbox">
                    <input type="text" required="required"/>
                    <span>Email</span>
                  </div>
                  <div className="inputbox">
                    <input type="text" required="required"/>
                    <span>Password</span>
                  </div>

                  <p className='user_permist'>By continuing, I confirm that I have read and accept the <a href="">Terms and Conditions.</a> and the <a href="">Privacy Policy.</a></p>

                  <div className="inputbox">
                    <a href="/">Register</a>
                  </div>
              </form>
            </div> 
            )}
            </div>
      </section>

    </>
  )
}
