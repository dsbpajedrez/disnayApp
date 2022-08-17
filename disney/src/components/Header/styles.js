import styled from "styled-components";

export const Container = styled.div` 
    grid-column:1/14;
    grid-row:1/2;
    background-color:rgb(7,21,79); 
    padding:0.5rem;
    display:flex;
    justify-content:space-between;
`
export const Image = styled.img`
    width:5rem;
    heigth:5rem;
` 
export const LeftSide = styled.div`
    color:white;
    display:flex;
    justify-content:sapce-around;
    padding:1rem;
    gap:1rem;
`
export const ButtonLogOut= styled.button`
    padding:1rem;
    cursor:pointer;
    background-color:#353357;
    border-radius:1rem;
    color:white;
    font-size:1.6rem;
`
export const Paragraph = styled.p`
    font-size:var(--paragraph-size);
`