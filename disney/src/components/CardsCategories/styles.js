import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    grid-column:2/7;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    gap:1rem;
    padding: 1rem;
    background-color:rgb(26, 29, 41);
    overflow-y:auto;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
    }
    
    &::-webkit-scrollbar:vertical {
        width:1.2rem;
    }
    
    &::-webkit-scrollbar-button:increment,&::-webkit-scrollbar-button {
        display: none;
    }  
    
    &::-webkit-scrollbar-thumb {
        background-color: #797979;
        border-radius: 20px;
        border: 2px solid #f1f2f3;
        :hover{
            background-color: #333232;
        }
    }
    
    &::-webkit-scrollbar-track {
        border-radius: 1rem;  
    }
`
export const Redirection = styled(Link)` 

`