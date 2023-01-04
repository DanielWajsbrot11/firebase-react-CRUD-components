import React, {useState} from 'react'
import { doc, updateDoc, setDoc } from 'firebase/firestore'
import { db } from '../lib/init-firebase'

export default function EditMovie() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    function handleSubmit (e){
        e.preventDefault()
        if(name === '' || id === ''){
            return
        }
        const docRef = doc(db, 'movies', id)

        // **only changed fields are updated**
        updateDoc(docRef, {name})
        .then(res=>{
            alert("Doc " + docRef.id + " was edited")
            setName('')
            setId('')
        })
        .catch(err => console.log(err))

        // **setDoc all the values are overwritten** 
        // setDoc(docRef, {name: name, age:26})
        // .then(res=>{
        //     console.log(docRef.id)
        // })
        // .catch(err => console.log(err))
    }
    return (
        <div>
            <form className='edit-movie' onSubmit={handleSubmit}>
                <label htmlFor="name">Movie ID</label>
                <input 
                    id='id'
                    type="text" 
                    value={id} 
                    onChange={e => setId(e.target.value)}
                />
                <br/>
                <label htmlFor="name">Movie Name</label>
                <input 
                    id='name'
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <button className="update-btn" type="submit">Update Movie</button>
            </form>
        </div>
    )
}
