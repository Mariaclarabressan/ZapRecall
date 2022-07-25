import React from "react";
import Issues from "./Issues";
import FlashCard from "./FlashCard";
import Icon from './Icon';


let componentesQuestions = Issues.map(value => {
    return {
        ...value,
        tap: false,
    }
})
componentesQuestions = componentesQuestions.sort(() => Math.random() - 0.5)

function messageResults(){

}


export default function Questions() {
    const [questions, setQuestions] = React.useState(componentesQuestions);
    const [results, setResults] = React.useState(0);

    function clicQuestion(indexQuestion) {
        let selectQuestion = questions.map((value, index) => {
            if (index === indexQuestion) {
                return {
                    ...value,
                    tap: true,
                    status: "unclicked"
                }
            }
            else {
                return {
                    ...value,
                    tap: false
                }
            }
        })
        setQuestions([...selectQuestion]);

    }

    function color(indexQuestion, status) {
        let selectQuestion = questions.map((value, index) => {

            if (index === indexQuestion) {

                return {
                    ...value,
                    tap: false,
                    status: status,
                }
            }
            else {
                return {
                    ...value,
                    tap: false
                }
            }
        })

        setQuestions([...selectQuestion]);
        setResults(results +1)
        
    }
  
     

    return (
        <>
            <div className="body-questions flex">
                {questions.map((value, index) => <FlashCard NumberQuestion={`Pergunta ${index + 1}`} tap={value.tap} index={index} clicQuestion={clicQuestion} question={value.front} answer={value.back} status={value.status} color={color} />)}
            </div>
            <div className="footer">
                {questions.map(value =>{
                    if(value.status !== 'unclicked'){
                        return <Icon status={value.status}/>
                    }
                })}
                
                <h1>{results} / {questions.length} Concluídos!</h1>
            </div>
            
        </>

    )
}