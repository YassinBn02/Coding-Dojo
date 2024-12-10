import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { deleteOne, getOneBook } from '../services/BookService'
const ShowOne = () => {
    const {id}=useParams()
    const [Book, setBook] = useState({})
    const navigate =useNavigate()
    useEffect(()=>{
        getOneBook(id)
            .then((res)=>{
                console.log(res)
                setBook(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    const Borrow=()=>{
        deleteOne(id)
        .then((res)=>{
            navigate("/")
        })
    }
    return (
        <div className='d-flex flex-column gap-5'>
            <NavBar title={Book.title}/>
        <div className='container d-flex flex-column align-items-center border p-5' style={{width:"600px",height:"300px"}}>
            <h2>{Book.title}</h2>
            <p>By {Book.author}</p>
            <p>Page count: {Book.pages}</p>
            {Book.isAvailable? <p style={{color:"#4DAF50"}}>Available for borrowing</p>:<p style={{color:"red"}}>Not available</p>}
            {Book.isAvailable?<button onClick={Borrow} className='btn btn-danger'>Borrow</button>:""} 
        </div>
        </div>
    )
}

export default ShowOne