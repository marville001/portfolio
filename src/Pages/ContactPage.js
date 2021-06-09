import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'My Contacts'} span={'My Contacts'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.723556250477!2d36.96237831536444!3d-0.39489699971188064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828677a4955ff13%3A0x7ae4dae9615396a6!2sDedan%20Kimathi%20University%20Of%20Technology!5e0!3m2!1sen!2ske!4v1623167752370!5m2!1sen!2ske"  width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Martin Mwangi"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+254 700207054'} text2={'+54 758969042'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'mwangimartin1904@gmail.com'} text2={'martin.mwangi.1904@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'347-10200, Muranga'} text2={'Kenya'} title={'Address'}/>
                </div>
            </div>
            <div className="title">
                <Tittle title={'Get In Touch'} span={'Get In Touch'} />
            </div>

        </div>
    )
}

export default ContactPage;
