import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
const Create = () => {
    const nav=useNavigate()
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [number,setNumber]=useState(0)
    const [isAvailable,setIsAvailable]=useState("")
    const submitHandler=(e)=>{
        console.log(isAvailable)
        e.preventDefault()
        axios.post("http://localhost:5000/api/Book/",{title,author,number})
            .then(res => {
                console.log(res);
                console.log(res.data);
                nav("/");
            })
            .catch((err) => {
				console.log(err);
			});
    }
    
    return (
    <div>
        <NavBar title={"Add Book"} />
        <form onSubmit={submitHandler} style={{display:"flex", flexDirection:"column"}}>
            <label>Title</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} />
            <label>Author Name</label>
            <input type="text" onChange={(e)=>setAuthor(e.target.value)}/>
            <label>Page Count</label>
            <input type="Number" onChange={(e)=>setNumber(e.target.value)} />
            <div>
            <label>Is it available</label>
            <input type="checkbox" onChange={(e)=>setIsAvailable(e.target.value)} />
            </div>
            <button className='btn btn-success'>Add Book</button>
        </form>
    </div>
    )
}

export default Create