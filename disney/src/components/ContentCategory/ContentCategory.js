import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getDoc, getFirestore,doc, where, getDocs, query, collection} from 'firebase/firestore'
import { Container } from './styles'
import ContentDetail from '../ContentDetail/ContentDetail'
import CardMovie from '../CardMovie/CardMovie'

const ContentCategory = () => {
  const [movies,setMovies] =useState([])
  const id = useParams().id;
  
  const selection = ()=>{
    switch (id) {
      case '1':
        return 'Marvel'
      case '2':
          return 'dc'    
      case '3':
        return 'comedy'
      case '4':
        return 'drama'
      default:
        return 'action'
    }
  }
  useEffect(()=>{
    const db = getFirestore()
    const q=query(
      collection(db,'peliculas'),
      where('category','==',`${selection()}`)
      )
    getDocs(q)
      .then(snapshot=>{
        setMovies(
          snapshot.docs.map(item=>(
            {
              id:item.id,
              ...item.data()
            }          
          ))
        )    
      })
  },[id])
  
  return (
    <Container>
      {movies.map(movie=><CardMovie{...movie} key={movie.id}/>)}
    </Container>
  )
}

export default ContentCategory