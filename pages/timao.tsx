import { NextPageContext } from 'next';
import React, {useEffect, useState} from 'react'



type TimaoProps = {
    frase ?: string;
    autor ?: string;
}


// chaves significa que usaremos javascript e não jsx.
export default function TimaoPage(props:TimaoProps) {
   // state em react utiliza o padrão getter & setter.
   // get = obter
    // set = definir
    //const {get, set} = useState(0);

    const [frase, setFrase] = useState(props.frase);
    const [autor, setAutor] = useState(props.autor);
    const [contador, setContador] = useState(0);

    // useEffect(função, array)
    useEffect(() => {
        console.log('useEffect foi executado');
        if(contador == 0){
            document.title = "Carregou a pagina, e executou a primeira vez";
        } else {
            document.title = "Carregou a pagina, executou "+ contador +" vezes!";
        }

    }, [autor, frase, contador]);

    return (
        <>
        <h1>{frase}</h1> 
        {autor && <h2>{autor}</h2>}
        <button onClick={(e) => {setFrase('Colorado é o melhor do mundo!')}}>Clique aqui</button>
        <button onClick={(e) => {setAutor('Marianna Magno')}}>Mudar o autor</button>
        <button onClick={(e) => {setContador(contador + 1)}}>Contador</button>
        </>
        )
}

TimaoPage.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch('http://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;

    return {
        frase,
        autor
    }
};


//props são informações que enviamos para dentro de um componente.
// sendo assim, SOMENTE, leitura!