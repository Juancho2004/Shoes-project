import React from 'react'
import { useFetch } from './useFetch'

export function User() {

  const { data } = useFetch(`http://127.0.0.1:5000/login`)

  return (
    <>
        {/* <div>
            {data?.map((user)=> (
                <form method="post">
                    <input type="text" name="username" placeholder="Nombre de usuario"/>
                    <input type="text" name="password" placeholder="Contraseña"/>
                    <input type="submit" value={'iniciar sesion'}/>
                </form>
            ))}
        </div> */}
        <form method="post">
          <input type="text" name="username" placeholder="Nombre de usuario"/>
          <input type="text" name="password" placeholder="Contraseña"/>
          <input type="submit" value={'iniciar sesion'}/>
        </form>
    </>
  )
}
