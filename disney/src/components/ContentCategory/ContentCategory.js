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
      default:
        break;
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
  },[])
  console.log(movies??[]);
  return (
    <Container>
      {movies.map(item=><CardMovie{...item}/>)}
    </Container>
  )
}

export default ContentCategory