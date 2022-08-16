import styled from "styled-components";

export const Container = styled.div`
    grid-column:2/7;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    padding:0.5rem;
    gap:1rem;
    background-color:var(--color-main);
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
            background-color: #0e0b14;
            border: 2px solid white;
        }
    }
    
    &::-webkit-scrollbar-track {
        border-radius: 1rem;  
    }
`