
// Properties.js

import React from 'react';

function Properties(propertie) {
    return (
        <div>
            <h1>Properties</h1>
            <p>{propertie.name}</p>
            <p>{propertie.address}</p>
        </div>
    );
    
}

export default Properties

