import React from 'react';
// import about from '../img/about.jpg';
import me from '../img/me-full.jpg';
import resume from "../resume.pdf"

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={me} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Martin Mwangi</span></h4>
                <p className="about-text">
                I am a Computer Science student in the Department of Computer Science at Dedan Kimathi University of Technology graduating in November 2021.
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
                
                <a href={resume} download="resume.pdf" style={{display: "inline-block"}} className="btn">Download Cv</a>
            </div>
        </div>
    )
}

export default ImageSection;
