import React from 'react';
import Pig from './Pig';

function PigsList({hogs}) {
    return (
        <div>
            {
                hogs.map(hog => (
                    <Pig
                        name={hog.name}
                        image={hog.image}
                    />
                ))
            }
        </div>
    );
}

export default PigsList;