import React from 'react'
import data from './data'

export default function Card(props) {
    return(
        <div>
        <div className="card">
        <img src={`../images/${props.item.imageUrl}`} className="card-img"/>
        <div className="card-info">
            <img src="../images/locationpin.png" className="card-location"/>
            <span className="card-location">
            {props.item.location}</span>
            <a className="card-maps" href={props.item.googleMapsUrl} target="_blank"> View on Google Maps</a>
            <p className="card-title">{props.item.title}</p>
            <span className="card-dates">{props.item.date}</span>
            <p className="card-description">{props.item.description}</p>
        </div>
        </div>
        </div>
    )
}
