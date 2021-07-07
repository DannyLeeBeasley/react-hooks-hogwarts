import React from 'react';

function Pig({name, image}) {
    return(
        <div>
            <img src={image}/>
            <p> {name}</p>
        </div>
    );
}

export default Pig;