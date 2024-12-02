import React, { useContext } from 'react'
import { MyContext } from '../App'
const Navbar = () => {
    const {user}=useContext(MyContext)
    return (
        <nav style={{textAlign:"end", backgroundColor:"#8C2FC5", color:"white"}}>
            <h1>Hi,{user}!</h1>
        </nav>
    )
}

export default Navbar