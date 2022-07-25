import setinha from '../img/setinha.png'
import interrogação from '../img/interrogação.png'
import check from '../img/check.png'
import Xvermelho from '../img/xizinhovermelho.png'

export default function Icon({ status }){
    if(status === "not-clicked"){
        return(
            <ion-icon name="play-outline"></ion-icon>
        )
    }
    if (status === "show-question"){
        return(
            <img src={setinha} alt= "setinha"/>
        )
    }
    if(status === 'green'){
        return(
            <img src= {check} alt = "acertoIcon"/>
        )
    }
    if(status === 'yellow'){
        return(
            <img src = {interrogação} alt = "quaseIcon"/>
        )
    }
    if (status === 'red'){
        return(
            <img src = {Xvermelho} alt = "errouIcon"/>
        )
    }
    return null
}