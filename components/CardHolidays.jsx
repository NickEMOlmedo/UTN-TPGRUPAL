import React from "react"

function CardHolidays({enviarACardHolidays}){
    return(
        <>
            <section className="holidays">
                <div className="center">
                    <h1 className="titulo">
                        {enviarACardHolidays}
                    </h1>
                </div>
            </section>
        </>
    )
}

export default CardHolidays