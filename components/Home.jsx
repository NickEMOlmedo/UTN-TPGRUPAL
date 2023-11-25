import { useState } from "react";
import Formulario from "./Formulario"

function Home (){

        const [noteText, setNoteText] = useState('hidden');
        const [noteText2, setNoteText2] = useState('');
    

    function Redirigir(){
        setNoteText2((noteText2)=>"hidden")
        setNoteText((noteText)=>"show")
    }    
    
    return(
        <>
        <section className={noteText2}>

            <div className="headerTitle">
            
                <h1>Generador de Tarjetas Pro</h1>
            </div>

            <div className="headerTex">
                <p>Hola, en este proyecto trabajamos la tematica de tarjetas para eventos y/o saludos</p>
            </div>
            
            <div className="center">
                <button type="submit" className="headerBtn" onClick={Redirigir}>Empezemos!</button>
            </div>
        </section>
            <div className={noteText}>
                <Formulario></Formulario>
            </div>
            
                
        </>
    )
}

export default Home