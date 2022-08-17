import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width:auto;
    grid-column:2/14;
    padding:0.5rem;
    // border:1px solid gray;
    // border-radius:20px;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color:white;
    // background-color:var(--verde-claro);
`
export const FormularioLogIn = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    gap:0.5rem;
`
export const Label = styled.label`
    width:50%;
    color:black;
    font-size:var(--paragraph-size);
`
export const Input = styled.input` 
    width:50%;
`
export const Titulo = styled.h1`
    withd:100%;
    text-align:center;
    color:var(--color-header-background);
`
export const Redirection = styled(Link)`
    color:rgb(26, 29, 41);
    font-size:2rem;
    text-decoration:none;
`
