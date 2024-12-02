import React, { useContext } from 'react'
import { MyContext } from '../App'
const Form = () => {
    const {user,setUser}=useContext(MyContext)

    const HandelChange=(e)=>{
        setUser(e.target.value)
    }
    return (
        <form>
            <label> Your Name : </label>
            <input type='text' value={user} onChange={HandelChange} style={{backgroundColor:"#EFEFEF" , borderRadius:"4px" , border:"None",outline:"None"}} />
        </form>
    )
}

export default Form