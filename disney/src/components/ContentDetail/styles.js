import styled from "styled-components";

export const CardContainer = styled.div`
    grid-column:2/7;
    display:flex;
    justify-content:space-around;
    padding:0.5rem;
    gap:0.5rem;
    overflow:auto;
    background-color:rgb(26, 29, 41);
    
`
export const ImageContainer = styled.div` 
    position:relative;
`
export const InformationContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

`
export const Image = styled.img`
    width:40rem;
    height:100%;
    background-image:cover;
    
`
export const Title = styled.h1`
    font-size:var(--title-size);
    font-weight:bold;
    color:white;

`
export const Paragraph = styled.p`
    font-size:var(--paragraph-size);
    color:white;

`
export const PlayerButton= styled.img`
    background-image:cover;
    width:13rem;
    height:13rem;
    position:absolute;
    transform:translateX(-50%);
    // transform:translateY(-50%);
    top:50%;
    left:50%;
    opacity:0.7;
    cursor:pointer;
`