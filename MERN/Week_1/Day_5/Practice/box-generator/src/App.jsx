import { useState } from 'react'
import './App.css'
import BoxForm from './components/BoxForm'
import DisplayForm from './components/DisplayForm'

function App() {
  const [boxs,setBoxs]=useState([])
  const addBox=(obj)=>{
    setBoxs([...boxs,obj])
  }
  return (
    <>
      <div style={{display:"flex" , flexDirection:"column",gap:"10px"}}>
      <BoxForm addBox={addBox} />
      <DisplayForm boxs={boxs} setBoxs={setBoxs}/>
      </div>
    </>
  )
}

export default App
