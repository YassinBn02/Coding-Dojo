import React from 'react'

const DisplayForm = ({boxs,setBoxs}) => {
    const deleteBox=(index)=>{
        const filterBoxs=boxs.filter((boxs,i)=>i!=index)
        setBoxs(filterBoxs)
    }
    return (
        <div style={{display:"flex" , gap:"10px"}}>
            {
                boxs.map((boxs,index)=> <div key={index} style={{backgroundColor: boxs.color , width:boxs.size + "px" ,height:boxs.size + "px"}}> <button onClick={()=>deleteBox(index)}>X</button></div> )
            }
        </div>
    )
}

export default DisplayForm