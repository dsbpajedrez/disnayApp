import { useRef } from "react";
import styled from "styled-components";

const BotonLogIn = styled.button`
    padding:0.5rem;
    background-color:var(--color-header-background);
    border: 0.1rem solid black;
    border-radius:1rem;
    cursor:pointer;
    color:white;
    width: ${({width})=> width && width};
    
`

const Boton = ({texto, width,style, onClick,disabled})=>{
    let boton = useRef();
    
    return(<BotonLogIn
    disabled={disabled}
        onClick={onClick}
        ref={boton}
        width={width}
        style={style}
    >
        {texto}
    </BotonLogIn>)
}
export default Boton;