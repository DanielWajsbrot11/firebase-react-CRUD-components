import React, {useEffect, useState} from 'react'
import { getDocs, doc, deleteDoc } from 'firebase/firestore'
import { movieCollectionRef } from '../lib/firestore.collections'
import { db } from '../lib/init-firebase';

export default function ListMovies() {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        getMovies()
    },[])
    useEffect(()=>{
        console.log(movies)
    },[movies])

    function getMovies(){
        getDocs(movieCollectionRef)
        .then(res => {
            const movs = res.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }))
            setMovies(movs)
        })
        .catch(err=>console.log(err))

    }

    function deleteMovie(id){
        const docRef = doc(db, 'movies', id)
        deleteDoc(docRef)
        .then(()=>console.log("Doc Deleted"))
        .catch(err=>console.log(err.message))
    }
  return (
    <div>
        <h4>ListMovies</h4>
        <button onClick={()=>getMovies()}>Refresh</button>
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    {movie.id}: {movie.data.name}
                    <button onClick={()=>deleteMovie(movie.id)}>🗑️</button>
                </li>
                
            ))}
        </ul>
    </div>
  )
}
