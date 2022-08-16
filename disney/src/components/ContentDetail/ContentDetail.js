import { collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { CardContainer } from './styles'

const ContentDetail = ({title,resume}) => {
  const [information, setInformation] = useState()
  const id= useParams().id
  console.log(id);
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
  console.log(information??[]);
  return (
    <CardContainer>
      {information?.length>0 &&(
        <>
          <h1>{information[0]?.title ?? ''}</h1>
          <p>{information[0]?.resume ?? ''}</p>
        </>
      )}
      
      
    </CardContainer>
  )
}

export default ContentDetail