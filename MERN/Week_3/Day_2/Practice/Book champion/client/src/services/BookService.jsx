import axios from "axios"

const http=axios.create({
    baseURL:"http://localhost:5000/api",
})

const getAllBooks=()=>{
    return http.get("/Book")
        .then(res=>res.data)
        .catch(err=>{throw err})
}

const getOneBook=(id)=>{
    return http.get("/Book/"+id+"/details")
        .then(res=>res.data)
        .catch(err=>{throw err})
}

const deleteOne=(id)=>{
    return http.delete("/Book/"+id)
        .then(res=>res.data)
        .catch(err=>{throw err})
}

const addBook=(newBook)=>{
    return http.post("/Book/",newBook)
        .then(res=>res.data)
        .catch(err=>{throw err})
}

const updateBook=(id,newBook)=>{
    return http.put("/Book/"+id,newBook)
        .then(res=>res.data)
        .catch(err=>{throw err})
}



export {getAllBooks,getOneBook,deleteOne,addBook,updateBook}