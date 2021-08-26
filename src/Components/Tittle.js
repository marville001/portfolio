import React from 'react'

function Tittle({title, index}) {
    return (
        <div className="title">
            <h3>
                <span className="index">{index}. </span>
                <span className="title-c">{title}</span>
                <hr/>
            </h3>
        </div>
    )
}

export default Tittle;
