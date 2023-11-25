import { useState, useRef } from "react"
import CardHolidays from "./CardHolidays";

function Formulario(){

    const [datos, datosPasados] = useState()
    const [noteText, setNoteText] = useState('hidden');
    const [noteText2, setNoteText2] = useState('');
    

    const enviarACardHolidays = (e) =>{
        e.preventDefault();
        datosPasados(inputName.current.value)
        setNoteText2((noteText2)=>"hidden")
        setNoteText((noteText)=>"show")
        
    }

    const inputName = useRef();
    const inputLogo = useRef();
    const inputDestinatario = useRef();
    //const textArea = useRef();

    

    // const handleChange = (e) => {
    // e.preventDefault();
    // console.log(inputName.current.value); 
    // console.log(inputLogo.current.value); 
    // console.log(inputDestinatario.current.value);
    //console.log(textArea.current.value); // obteniendo el valor del input desde el ref
    //};    
    
    
    return(
        <>
            <section className={ noteText2 }>

                <form className="principal">
                    <label htmlFor="name">Nombre de la Empresa</label>
                    <input  type="text" 
                            name="name"
                            ref={inputName} 
                            >
                    </input>
                    
                    <label htmlFor="logo">Logo de la Empresa</label>
                    <input  type="text" 
                            name="logo"
                            ref={inputLogo}
                            >
                    </input>
                    
                    <label htmlFor="destinatarios">Destinatario</label>
                    <input  type="text" 
                            name="destinatarios"
                            ref={inputDestinatario}
                            >
                    </input>
                    
                    <label htmlFor="motivos">Motivos:</label>
                    <select name="motivos">
                        <option value="holidays">Feliz Navidad y Año Nuevo</option>
                        <option value="aniversary">Cena Aniversario</option>
                        <option value="jobReunion">Reunión de Trabajo</option>
                    </select>
                    
                    <textarea name="dedicatoria" placeholder={"Escriba la dedicatoria"} rows={10} cols={40}>
                    </textarea>
                    <button onClick={enviarACardHolidays}>Generar Tarjeta</button>
                </form>
            </section>
            <section className={noteText}>
                <CardHolidays enviarACardHolidays={datos}></CardHolidays>
            </section>
            
        </>
    )
    
}

export default Formulario