import React, { useState } from 'react'

const PersonCard = (props) => {
    const [ageDisplay,setAgeDisplay]=useState(props.prop1.age)
    const {prop1} = props
    const InCreaseAge = () => {
        setAgeDisplay(ageDisplay + 1)
    }
    return (
    <>
        <div>
            <h2>{prop1.lastName}, {prop1.firstName}</h2>
            <p>Age : {ageDisplay}</p>
            <p>Hair Color : {prop1.hairColor}</p>
            <button onClick={InCreaseAge}>Brithday Button for {prop1.firstName} {prop1.lastName}</button>
        </div>
    </>
    )
}

export default PersonCard 