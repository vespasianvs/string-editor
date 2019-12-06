import React from 'react';

const charComponent = (props) => {
    const styles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return <p style={styles} onClick={props.click}>{props.letter===" " ? '\u00A0' : props.letter}</p>
}

export default charComponent;