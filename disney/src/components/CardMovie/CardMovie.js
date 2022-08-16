import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Title } from './styles'

const CardMovie = ({url,id,title}) =>{
    return(
        <Container key={id}>
            <Link to={`/movieDetail/${title}`}>
                <Title>{title}</Title>
                <Image src={url} key={id}/> 
            </Link>
        </Container>
    )

    }
export default CardMovie