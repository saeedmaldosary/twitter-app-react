import React from 'react';

function Tweet(props) {
    return(
        <div className="tweet">
            <h1>{props.name}</h1>
            <p>{props.message}</p>
        </div>
    );
}

export default Tweet;  