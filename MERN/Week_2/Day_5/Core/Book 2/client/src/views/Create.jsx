import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import axios from 'axios'
const Create = () => {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [number,setNumber]=useState(0)
    const [isAvailable,setIsAvailable]=useState("")
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/Book/")

    }
    return (
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" onChange={setTitle(e.target.value)} value={title}/>
            <label>Author Name</label>
            <input type="text" onChange={setAuthor(e.target.value)} value={author} />
            <label>Page Count</label>
            <input type="Number" onChange={setNumber(e.target.value)} value={number} />
            <label>Is it available</label>
            <input type="checkbox" onChange={setIsAvailable(e.target.value)} value={isAvailable} />
        </form>
    )
}

export default Create