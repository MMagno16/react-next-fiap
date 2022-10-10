import React from 'react'
import styles from './Header.module.css'
import { css } from '@emotion/css';
import Link from 'next/link';
import styled from '@emotion/styled';

//  existem 5 maneiras diferentes de utilizar css no React:
// css PURO (ex.aquivo.css) - não recomendado
// css modules - ex. arquivo.module.css 
// Styled Components - ex. arquivo.tsx
// sass - 
// emotion - pode usar a funçao css ou o component styled.


// A MELHOR É A QUE O SEU TIME UTILIZA.

//styled-components
const HeaderPage = styled.header`
width: 100%;
height: 100px;
background: rgb(247, 243, 232);
display: flex;
align-items: center;
justify-content: space-between;

`;


const NavMenu = styled.nav `
width: 80%;
display: flex;
justify-content: center;
height: 50px;
& a:hover {
    font-weight: bold;
}
& li {
    margin-top: 20px;
    border-bottom: 4px solid transparent;
    padding-bottom: 20px;
}
& li:hover {
    border-bottom: double 4px orange;
}
`;


const Input = styled.input `
   border: none;
  border-radius: 10px;
  padding: 2px 10px;
  height: 30px;

`;

const Button = styled.button `
  border: none;
  border-radius: 10px;
  height: 30px;
  margin-left: 5px;
  color: #333;
  background: linear-gradient(150deg, #ffeb84 0%, #ffd53e 100%);
  box-shadow: 0px 2px 5px -1px rgb(59, 59, 59, 0.5);

`;
//input
//button

type HeaderProps = {
    Buscar ?: string;
    menu ?: Array<string>;
}

export default function Header(props:HeaderProps) {
    return (
        // <header className={styles['menu-site']}>
        <HeaderPage>
            <div>LogoTipo</div>
            <NavMenu>
                <ul className={css`
                margin: 0;
                padding: 0;
                display: inline-flex;
                & > li {
                    list-style: none;
                    min-width: 100px;
                    text-align: center;
                    padding: 10px;
                    // border: solid red;
                }
                `}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="#">Galeria</Link></li>
                    <li><Link href="#">Serviços</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">Contato</Link></li>
                </ul>
            </NavMenu>
            <Input/>
            <Button>{props.Buscar?props.Buscar:"Buscar"}</Button>
        </HeaderPage>
    )
}


