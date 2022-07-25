import React from "react";
import Icon from "./Icon"
import Setinha from "../img/setinha.png"

function Card ({NumberQuestion, index, clicQuestion, question, status}) {
    return(
        <div className={`Card ${status}`} onClick={() => clicQuestion(index)}>        
            {NumberQuestion}
            
            <Icon status = {status}/>   
        </div>
    )
}

function BackCard({answer, index, color}){
    return (
        <div className="reposta-avaliacao">
            {answer}
            <div className="botoes-resposta flex">
                
                    <div className="botao-verde verde  flex" onClick={() => color(index, 'green')}>
                        Zap!
                    </div>
                    <div className="botao-amarelo amarelo flex" onClick={() => color(index, 'yellow')}>
                        Quase lembrei
                    </div>
                    <div className="botao-vermelho vermelho flex" onClick={() => color(index, 'red')}>
                        Errei
                    </div>
                 
            </div>
        </div>
    )
}
function FrontCard({question , answer, color, index ,status}){
    
    const [show, setShow] = React.useState(false);
    console.log(status)
    return(
        <>
        { !show ?(
            <div className = "Card-grande">
            {question}  
            <img src ={ Setinha } alt = "setinha" onClick = {() => setShow(true)}/>
            
                 
        </div>
        ) : <BackCard answer={answer} index ={index} color={color}/>}
        </>
        
    )
}


export default function FlashCard({NumberQuestion, tap, index, clicQuestion, question, answer, status, color}){
    return(
        <>
        {!tap ? <Card className = "card-pergunta" NumberQuestion={NumberQuestion} index = {index} clicQuestion = {clicQuestion} status = {status} /> : <FrontCard className="perguntinha" question = {question} answer = {answer} status = {status} color = {color} index = {index}   />}
        </>        
    )
}