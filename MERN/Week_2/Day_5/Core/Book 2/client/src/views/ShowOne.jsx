import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import NavBar from '../components/NavBar'
const ShowOne = () => {
    const {id}=useParams()
    const [Book, setBook] = useState({})
    const navigate =useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:5000/api/Book/"+id+"/details")
            .then((res)=>{
                console.log(res.data)
                setBook(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    const Borrow=()=>{
        axios.delete("http://localhost:5000/api/Book/"+id)
        .then((res)=>{
            navigate("/")
        })
    }
    return (
        <div>
            <NavBar title={Book.title}/>
        <div style={{display:'flex',flexDirection:"column",gap:10,alignContent:'center',textAlign:"center"}}>
            <h2>{Book.title}</h2>
            <p>By {Book.author}</p>
            <p>Page count: {Book.pages}</p>
            {Book.isAvailable? <p style={{color:"#4DAF50"}}>Available for borrowing</p>:<p style={{color:"red"}}>Not available</p>}
            {Book.isAvailable?<button onClick={Borrow} className='btn btn-danger' style={{width:100,marginLeft:500}}>Borrow</button>:""} 
        </div>
        </div>
    )
}

export default ShowOne