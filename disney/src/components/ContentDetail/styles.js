import styled from "styled-components";

export const CardContainer = styled.div`
    grid-column:2/7;
    display:flex;
    justify-content:space-around;
    padding:0.5rem;
    gap:0.5rem;
    
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

`
export const Paragraph = styled.p`
    font-size:var(--paragraph-size);

`
export const PlayerButton= styled.img`
    background-image:cover;
    width:10rem;
    height:10rem;

`