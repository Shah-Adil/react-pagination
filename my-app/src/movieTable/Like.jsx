import React from 'react'

export const Like = (props) => {

    let classes = "fa-heart fa";
    if (!props.liked) classes += "-regular"

    return (
        <div className='like-icon'>
            <i className={classes} onClick={props.onLiked}></i>
        </div>
    )
}
