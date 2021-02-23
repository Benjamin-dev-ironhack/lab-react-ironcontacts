import React from 'react'

 function ContactDetails(props) {
    return (
        <div>
            <img src={props.image}></img>
            {props.name}
            {props.popularity}
            <button onClick={() => {props.onDelete(props.id) }}>Delete</button>
        </div>
    )
}

export default ContactDetails