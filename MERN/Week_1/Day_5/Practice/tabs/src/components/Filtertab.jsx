import React from 'react'

const Filtertab = ({setSelectedTab}) => {
    return (
        <div className='d-flex justify-content-between'>
            <button className='btn btn-dark' onClick={()=>setSelectedTab("tab1")}>Tab1</button>
            <button className='btn btn-outline-secondary' onClick={()=>setSelectedTab("tab2")}>Tab2</button>
            <button className='btn btn-outline-secondary' onClick={()=>setSelectedTab("tab3")}>Tab3</button>
        </div>
    )
}

export default Filtertab