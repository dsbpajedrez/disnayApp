import React from 'react'
import { Image } from './styles'

const CardMovie = ({url,id}) => <Image src={url} key={id}/> 


export default CardMovie