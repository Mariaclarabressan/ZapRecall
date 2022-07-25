import React from 'react';
import Home from './Home'
import PlayScreen from './PlayScreen'

export default function App(){
    const [hidden, setHidden] = React.useState(true);
    return(
        <>
            {hidden ? <Home setHidden = {setHidden} /> : <PlayScreen/> }
        </>
    )
}