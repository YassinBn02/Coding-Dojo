import {Routes,Route} from "react-router-dom"
import Home from './views/Home'
import ShowOne from "./views/ShowOne"
import Create  from "./views/Create"
function App() {
  
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/books/:id/details" element={<ShowOne />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </>
  )
}

export default App
