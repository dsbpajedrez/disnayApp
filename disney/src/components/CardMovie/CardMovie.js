import React from 'react'
import { Container, Image, Redirection, Title } from './styles'

const CardMovie = ({url,id,title}) =>{
    return(
        <Container >
            <Redirection to={`/movieDetail/${title}`}>
                <Title>{title}</Title>
                <Image src={url} key={id}/> 
            </Redirection>
        </Container>
    )

    }
export default CardMovie