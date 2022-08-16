import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    grid-column:1/2;
    background-color:var(--color-header-background);
`
export const Redirection = styled(Link)`
    font-size:var(--paragraph-size);
    color:white;
    text-decoration:none;
    padding:0.5rem;
  

`
export const Item = styled.li`
    width:100%;
    text-decoration:none;
    transition:450ms all;
    &:hover{
        border-bottom:1px solid white;
        padding:0.5rem;
    }
`
export const List = styled.ul`
    padding:0;
    list-style:none;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`