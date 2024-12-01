import { useState } from 'react'
import Filtertab from './components/Filtertab'
import ViewTab from './components/ViewTab'



function App() {
  const [tabs, setTabs] = useState(
    [
      {"name":"tab1","content":"tab1 content here."},
      {"name":"tab2","content":"tab2 content here."},
      {"name":"tab3","content":"tab3 content here."},
    ])
    const [selectedTab,setSelectedTab]=useState("tab1")
    
    const filtredTab=tabs.filter(t=>{
      if(selectedTab==="tab1") return tabs[0]
      return t.name.includes(selectedTab)
    })
    

  return (
    <>
      <div className='container'>
        <Filtertab setSelectedTab={setSelectedTab} /> <br />
        <div className='border'>
          <ViewTab filtredTab={filtredTab} />
        </div>
      </div>
    </>
  )
}

export default App
