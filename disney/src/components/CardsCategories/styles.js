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
height:fit-content;
transition: 450ms all;
-webkit-transform-origin:center top;
transform-origin:center top;
&:hover{
-webkit-transform:translate3d(0,0,-100px);
    transform:translate3d(0,0,100px);
    transform:scale(1.1);
    z-index:100;
    // border:2px solid white;
    // box-shadow: white 0px 14px 28px, white 0px 10px 10px;
    box-shadow: white 0px 2px 4px, white 0px 7px 13px -3px, white 0px -3px 0px inset;
}; 

`