import styled from "styled-components";

export const CardContainer = styled.div`
    grid-column:2/7;
    display:flex;
    justify-content:space-around;
    padding:0.5rem;
    gap:1rem;
    overflow:auto;
    background-color:rgb(26, 29, 41);
    
`
export const ImageContainer = styled.div` 
    position:relative;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

`
export const InformationContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

`
export const Image = styled.img`
    width:40rem;
    // height:100%;
    height:40rem;
    background-image:cover;
    box-shadow:white 0px 0px 0px 2px,white  0px 4px 6px -1px, white 0px 1px 0px inset;

    
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
    transform:translate(-50%,-50%);
    // transform:translateY(-50%);
    top:50%;
    left:50%;
    opacity:0.7;
    cursor:pointer;
`