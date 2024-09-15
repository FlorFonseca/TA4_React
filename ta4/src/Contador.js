import React, { useState } from "react";


const Contador = () => {
    const [contador, setContador] = useState(0);//1er valor, es el que cambia, 2do el que nos sirve para hacer cambiar el 1er

    const increm = () => {
        setContador(contador + 1);
    };
    const decrem = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };
    const reset = () => {
        setContador(0);
    }

    return (
        <div className="contenedorContador">
            <h1 id="titulo">Contador</h1>
            <h2 id="numeros">{contador}</h2>
            <div id="botones">
                <button onClick={increm}>Incrementar</button>
                <button onClick={decrem}>Decrementar</button>
                <button onClick={reset}>Reiniciar</button>
            </div>

        </div>
    );
}

export default Contador;