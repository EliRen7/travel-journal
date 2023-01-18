import React from 'react'
import Card from './Card'
import NavBar from './NavBar'
import data from './data'

export default function App() {
    const cards = data.map(item => {
        return(
            <Card 
                key={item.id}
                item= {item}
            />
        )
    })
    return(
        <>
             <NavBar />
             {cards}
        </>
    )
}



