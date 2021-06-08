import React from 'react';
// import about from '../img/about.jpg';
import me from '../img/me-full.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={me} style={{width:"300px"}} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Lorem Ipsum</span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Martin Mwangi Wanjiku</p>
                        <p>: 21</p>
                        <p>: Kenyan</p>
                        <p>: English, Kiswahili, Kikuyu</p>
                        <p>: 347-10200, Murang'a</p>
                        <p>: Kenya</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
