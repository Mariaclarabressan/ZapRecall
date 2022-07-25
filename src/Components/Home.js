import logo from '../img/logo.png'
import React from 'react'


export default function Home({setHidden}){
    

    return(
        <div className = "Home" >
            <img src= {logo} alt = "logo"/>
            <p>ZapRecall</p>
            <button onClick = {() => setHidden(false)}>Iniciar Recall </button>

        </div>
    )
}



