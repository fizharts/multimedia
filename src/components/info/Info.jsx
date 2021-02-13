import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React from 'react'

export const Info = () => {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <h1 className="text-white animate__animated animate__bounce">
                    <Link to="/planetas" style={{
                        textDecoration: "none!important",
                        color: "white"
                    }}>
                        Info
                </Link>
                </h1>
            </div>

            <div className="jumbotron">
                <h1>Acerca del proyecto</h1>
                <h6>Ocupación  Hospitalaria de la Ciudad de méxico área metropolitana</h6>

<br/>
<p className="text-justify">
Lo que estás viendo es un proyecto interactivo
logrado con los datos que proporciona la ciudad de méxico
accesibles y gratuitos para todo público (actualmente están
cambiando de servidores por lo cual los datos que ves son
guardados de días anteriores mas informacion {<Link to="/cdmxinfo" target="_blank">aqui</Link>}  )
</p>

<p>
Los datos se usan para crear los planetas que representan
cada hospital registrado en el área metropolitana , los colores
cambian según su ocupación hospitalaria al día que estás viendo
esto , el número de estrellas representa cada una de las personas
 que han perdido la vida a causa del COVID 19 en la Ciudad de
 méxico y el area metropolitana, puedes hacer click en el título
  “Datos hospitalarios” para ver mejor la comparación entre
  los hospitales y el número de decesos.
  </p>
<p>
El sonido es condicionado de acuerdo a la comparación
en relación entre el número de hospitales y ocupación Alta ,
Media y Baja, se puede activar y desactivar .
</p>
<p>
En el botón {
    <Link to="/datos" target="_blank">“Datos”</Link>
    
    }
podrás ver toda esta información en un formato más tradicional

Tecnología usada :
Para este proyecto se uso la libreria de JavaScript React.js para el maquetado y manejo de la información así como Bootstrap , la librería Three.js para las animaciones y objetos en 3D , el manejo de audio con Howler.js

El código usado esta accesible para quien lo quiera en el siguiente {
    <Link to="/gitHub" target="_blank">link</Link>
    
    }
    </p>
    <button className="btn btn-outline-primary">{
        <Link to="/planetas">
            Volver
        </Link>
    }</button>
                </div>
        </div>
    )
}
