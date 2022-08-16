import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getDoc, getFirestore,doc, where, getDocs, query, collection} from 'firebase/firestore'

const ContentCategory = () => {
  const [movies,setMovies] =useState([])
  const id = useParams().id;
  
  useEffect(()=>{
    const db = getFirestore()
    const q=query(
      collection(db,'peliculas'),
      where('category','==','Marvel')
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
    <div>ContentCategory</div>
  )
}

export default ContentCategory