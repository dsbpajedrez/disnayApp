import React from 'react'
import { CardContainer, Image } from './styles'

const AVENGER_IMAGE ='https://www.latercera.com/resizer/_yS9TgA35l8Fz1NPunsjNvGJupQ=/800x0/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/2OLDWACBYBDGNHCLT72CS7JFYU.jpg';
const CardCategory = () => {
  return (
    <CardContainer>
      <Image src={AVENGER_IMAGE}/>
    </CardContainer>
  )
}

export default CardCategory