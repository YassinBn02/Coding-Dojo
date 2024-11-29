import React, { useState } from 'react'

const BoxForm = ({addBox}) => {
    const [color,setColor]=useState("")
    const[size,setSize]=useState(0)
    const SubmitHandler=(e)=>{
        e.preventDefault()
        addBox({color,size})
        setColor("")
        setSize(0)
    }
    return (
        <div>
            <h1>Box Generator Master</h1>
            <form onSubmit={SubmitHandler}>
                <label >Color : </label> 
                <input value={color} type="text" onChange={(e)=>setColor(e.target.value)} /> <br />
                <label >Size(pixels) : </label> 
                <input value={size} type="number" onChange={(e)=>setSize(e.target.value)} /><br />
                <button>Add</button>
            </form>
        </div>
    )
}

export default BoxForm