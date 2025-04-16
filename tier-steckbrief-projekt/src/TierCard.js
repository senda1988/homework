import React from 'react'

function TierCard(props) {

    return (
        <div><h2>TierCard</h2>
            <p><strong>name: </strong> {props.name}</p>
            <p><strong>art: </strong> {props.art}</p>
            <p><strong>krankheit: </strong> {props.krankheit}</p>

        </div>

    )
}

export default TierCard