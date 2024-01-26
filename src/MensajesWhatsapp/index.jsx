import React, { useState } from 'react'
import './main.css'


export function MensajesWhatsapp() {
    const [numeroCelular, setNumeroCelular] = useState('');
    const [mensajeCliente, setMensajeCliente] = useState('');
  
    const enviarMensajeWhatsApp = async () => {
      try {
        const respuesta = await fetch('http://127.0.0.1:5000/enviar-mensaje', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            numero_celular: numeroCelular,
            mensaje_cliente: mensajeCliente,
          }),
        });
  
        const resultado = await respuesta.json();
        
        if (resultado.success) {
          console.log('Mensaje enviado correctamente');
          // Puedes agregar lógica adicional aquí, por ejemplo, mostrar un mensaje de éxito al usuario.
        } else {
          console.error('Error al enviar el mensaje:', resultado.error);
          // Puedes manejar el error de acuerdo a tus necesidades.
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };
  
    return (
      <div>
        <h2>Enviar Mensaje de WhatsApp</h2>
        <label>Número de Celular:</label>
        <input type="text" value={numeroCelular} onChange={(e) => setNumeroCelular(e.target.value)} />
        <br />
        <label>Mensaje:</label>
        <textarea value={mensajeCliente} onChange={(e) => setMensajeCliente(e.target.value)} />
        <br />
        <button onClick={enviarMensajeWhatsApp}>Enviar Mensaje</button>
      </div>
    );
  };

