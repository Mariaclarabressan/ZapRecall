import logoPequeno from '../img/logo-pequeno.png'

export default function Header(){
    return(
        <div className = 'Header'>
            <img src={logoPequeno} alt = "logo-pequeno"/>
            <p> ZapRecall </p>
        </div>
    )
}