import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Button, CardContainer, Image, ImageContainer, InformationContainer, Paragraph, PlayerButton, Title } from './styles'
import player from '../../assests/icon-player.svg'
const ContentDetail = ({title,resume}) => {
  const [information, setInformation] = useState()
  const id= useParams().id

  useEffect(()=>{
    const db = getFirestore()
    const q= query(
      collection(db,'peliculas'),
      where('title','==',`${id}`)
      )
      getDocs(q)
        .then(data=>{
          setInformation(data.docs.map(movie=>{
            return {
              id:movie.id,
              ...movie.data()
            }
          }))
        })

  },[])
  ;
  return (
    <>
    
      {information?.length>0 &&(
       <CardContainer>
        <ImageContainer>
          <Image src={information[0]?.url}/>
          <PlayerButton src={player}/>
        </ImageContainer>
          <InformationContainer>
            <Title>{information[0]?.title ?? ''}</Title>
            <Paragraph>{information[0]?.resume ?? ''}</Paragraph>
          </InformationContainer>
        </CardContainer>
      )}
      
      </>
    
  )
}

export default ContentDetail