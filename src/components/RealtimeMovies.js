import React, { useEffect, useState } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { movieCollectionRef, orderedMovieCollectionRef } from '../lib/firestore.collections'
import { doc,deleteDoc } from 'firebase/firestore'
import { db } from '../lib/init-firebase'

export default function RealtimeMovies() {
    const [movies, setMovies] = useState([])
    
    useEffect(()=> {
        const unsubscribe = onSnapshot(orderedMovieCollectionRef, snapshot=>{
            setMovies(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()})))
        })
        return () => {
            unsubscribe()
        }
    },[])
    function deleteMovie(id){
        const docRef = doc(db, 'movies', id)
        deleteDoc(docRef)
        .then(()=>{
            alert("Doc Deleted")
        })
        .catch(err=>{
            console.log("ERROR!"+err.message)
        })
    }
    return (
        <div>
            <div>
                {movies.map((movie,i) => (
                    <div key={i} className="list">
                        <p key={movie.id}>{movie.id}: {movie.data.name}</p>
                        <button className="trash-icon" onClick={()=>deleteMovie(movie.id)}>🗑️</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
