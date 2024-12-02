import { useState,createContext } from 'react'
import FormWrapper from './compenents/FormWrapper'
import Navbar from './compenents/Navbar'
const MyContext=createContext()
export {MyContext}
function App() {
  const [user, setUser] = useState("")

  return (
    <>
    <div>
      <MyContext.Provider value={{user,setUser}}>
        <Navbar />
        <FormWrapper />
      </MyContext.Provider>
    </div>
    </>
  )
}

export default App
