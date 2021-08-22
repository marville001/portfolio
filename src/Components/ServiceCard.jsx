import React from 'react';

function ServiceCard({image, title, text}) {
    return (
        <div className="service-card">
            <div className="service">
                <div className="service-head">
                    <img src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                </div>
                <p className="s-text">
                        {text}
                    </p>
            </div>
        </div>
    )
}

export default ServiceCard;
