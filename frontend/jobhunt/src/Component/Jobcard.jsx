import React from 'react'
import "./jobcard.css"
const Jobcard = ({data}) => {

    
    return (
        <div className="cardContainer">
            <div className="imgCont">
                <img className="imgCont" src={data.image}/>
            </div>
            <div className="details">
                <div className="detailsHeader">{data.title}</div>
                <div className="detailsPara">
                    {data.description}
                </div>
                <button className="viewBtn">View Details</button>
            </div>
        </div>
    )
}

export default Jobcard
