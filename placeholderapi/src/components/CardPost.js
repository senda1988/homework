import React from 'react';
import './CardPosts.css';
import { Link } from 'react-router-dom';


function CardPost(props) {
    return (
        <Link to={`/user/${props.userId}`}>
            <div className='card-post'>
                <strong>Post nummer:  </strong>{props.id}<br />
                <strong>Title : </strong> {props.title}<br />
                <strong>Body : </strong> {props.body}
            </div>
        </Link>
    )
}

export default CardPost