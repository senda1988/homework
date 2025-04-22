import React from 'react'

function ListTier(props) {
    return (
        <>
            <div className='card'>
                <img src={props.image} width="200px"></img ><br />
                <strong>Name:</strong> {props.name}<br />
                <strong>Art:</strong>{props.art}<br />
                <strong>Krankheit:</strong>{props.krankheit}
            </div>
        </>
    )
}

export default ListTier;