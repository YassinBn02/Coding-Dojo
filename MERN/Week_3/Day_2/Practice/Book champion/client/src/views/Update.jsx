import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { getOneBook, updateBook } from '../services/BookService'

const Update = () => {
    const nav=useNavigate()
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [pages,setPages]=useState(1)
    const [isAvailable,setIsAvailable]=useState("")
    const [errorHandler,setErrorHandler]=useState({})
    const [navTitle,setNavTitle]=useState("")
    const [formErrors,setFormErrors]=useState({})

    const titleHandler=(e)=>{
        setTitle(e.target.value)
        const value=e.target.value.trim()
        let errorMsg=""
            if(!value){
                errorMsg="title is required!"
            }else if(value.length<2){
                errorMsg="title must be at least 2 characters!"
            }else if(value.length>255){
                errorMsg="title must be less than 255 characters long"
            }
        setFormErrors({...formErrors,title:errorMsg})
    }

    const authorHandler=(e)=>{
        setAuthor(e.target.value)
        const value=e.target.value.trim()
        let errorMsg=""
            if(!value){
                errorMsg="author is required!"
            }else if(value.length<2){
                errorMsg="author must be at least 2 characters!"
            }else if(value.length>255){
                errorMsg="author must be less than 255 characters long"
            } 
        setFormErrors({...formErrors,author:errorMsg})
    }
    
    const pagesHandler=(e)=>{
        setPages(e.target.value)
        const value=e.target.value
        let errorMsg=""
        if(!value){
            errorMsg="page is required!"
        }else if(value<1){
            errorMsg="pages must be at least 1!"
        } 
        setFormErrors({...formErrors,pages:errorMsg})
    }

    const {id}=useParams()
    useEffect(()=>{
        getOneBook(id)
            .then((res)=>{
                console.log(res)
                setTitle(res.title)
                setNavTitle(res.title)
                setAuthor(res.author)
                setPages(res.pages)
                setIsAvailable(res.isAvailable)
            })
            .catch((err)=>{
                console.log(err)
            })
            
    },[id])

    const submitHandler=(e)=>{
        e.preventDefault()
        const newBook={title,author,pages,isAvailable}
        updateBook(id,newBook)
            .then(res => {
                console.log(res);
                console.log(res)
                nav("/");
            })
            .catch((err) => {
				console.log(err);
                setErrorHandler(err.response.data.errors)
			});
    }
    const validateForm = () => {
        return Object.values(formErrors).every(value => value === '');
    }
    return (
        <div>
            <NavBar title={"update  "+navTitle} />
        <div className="container">
        <form onSubmit={submitHandler} style={{display:"flex", flexDirection:"column",alignItems:"center",paddingTop:30}}>
            <div className="col-3">
            <div className='mb-3 d-flex flex-column gap-2'>
            <label>Title</label>
            <input type="text" onChange={titleHandler} value={title}/>
            {errorHandler.title && <p className='alert alert-warning'>{errorHandler.title.message}</p>}
            {formErrors.title && <p className='alert alert-danger'>{formErrors.title}</p>}
            </div>
            <div className="mb-3 d-flex flex-column gap-2">
            <label>Author Name</label>
            <input type="text" onChange={authorHandler}  value={author}/>
            {errorHandler.author && <p className='alert alert-warning'>{errorHandler.author.message}</p>}
            {formErrors.author && <p className='alert alert-danger'>{formErrors.author}</p>}
            </div>
            <div className="mb-3 d-flex flex-column gap-2 col-4">
            <label>Page Count</label>
            <input type="Number" onChange={pagesHandler} value={pages} />
            </div>
            {errorHandler.pages && <p className='alert alert-warning'>{errorHandler.pages.message}</p>}
            {formErrors.pages && <p className='alert alert-danger'>{formErrors.pages}</p>}
            <div className='mb-3 d-flex gap-2'>
            <label>Is it available?</label>
            <input checked={isAvailable} type="checkbox" onChange={(e)=>setIsAvailable(e.target.checked)} />
            </div>
            <div className="d-flex justify-content-center">
            <button disabled={!validateForm()} className='btn btn-primary'>Update!</button>
            </div>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Update