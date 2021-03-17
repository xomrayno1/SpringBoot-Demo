import React from 'react';

function Card({emp}) {
    return (
        <div>
            <hr/>
            <h1>{emp.firstName}</h1>
            <hr/>
        </div>
    );
}


export default Card;