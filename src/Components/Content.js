import React from 'react'
//import './Content.css'

function Content({className, ...props}) {
    return (
        <div className={['Content', className].join('')} {...props} />
    );
}

export default Content