import styled from "styled-components";

export const Container= styled.div`
    border:1px solid red;
    padding:0.5rem;
    border-radius:1rem;
    overflow:hidden;
    max-width:25rem;
    max-height:30rem;
`
export const Title = styled.h1`
    font-size:var(--title-size);
`

export const Image = styled.img`
    width :24rem;
    height:24rem;
    object-fit:cover;
`