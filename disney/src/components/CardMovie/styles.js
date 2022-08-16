import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container= styled.div`
    border:1px solid white;
    padding:0.5rem;
    border-radius:1rem;
    overflow:hidden;
    max-width:25rem;
    max-height:30rem;
    cursor:pointer;
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
export const Title = styled.h1`
    font-size:var(--title-size);
    color:white;
`
export const Redirection = styled(Link)`
    text-decoration:none;
`

export const Image = styled.img`
    width :24rem;
    height:24rem;
    background-image:cover;
`