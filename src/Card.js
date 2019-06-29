import React from 'react';





function Card(props) {

    return (
        <div className="Card">
        <h3>{props.titleProp}</h3>
        <p>{props.contentProp}</p>
        </div>
    )
}


export default Card;