import React, {useState} from 'react'
import {addDoc} from 'firebase/firestore'
import { movieCollectionRef } from '../lib/firestore.collections'


export default function AddMovie() {
    const [name, setName] = useState('')

    function handleSubmit (e){
        e.preventDefault()
        if(name === ''){
            return
        }
        addDoc(movieCollectionRef, {name})
        .then(res=>{
            alert("Doc " + res.id + " was added")
            setName('')
        })
        .catch(err=>console.log(err.message))
    }
    return (
        <div>
            <form className="movie-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Movie Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button className="add-btn" type="submit">Add Movie</button>
            </form>
        </div>
    )
}
