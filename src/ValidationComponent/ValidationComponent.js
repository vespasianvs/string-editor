import React from 'react';

const validationComponent = (prop) => {
    if (prop.length < 5) return <p>Text too short</p>;
    else if (prop.length > 20) return <p>Text too long</p>;
    else return <p></p>
}

export default validationComponent;