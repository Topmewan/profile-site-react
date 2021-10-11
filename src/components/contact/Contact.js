import './Contact.css';
import phone from '../../img/phone-volume.svg';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';
import email from '../../img/envelope-alt.svg';
import location from '../../img/map-marker.svg';
import {useRef} from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_q0hodjj',
            'template_oyga0rh',
            formRef.current,
            'user_q9vQqP9XnTkK0yPD322D1'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Contacts</h1>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <img
                                        src={phone}
                                        alt=''
                                        className="c-icon"
                                    />
                                    +7 931 336 21 50
                                </div>
                                <div className="c-info-item">
                                    <img
                                        src={email}
                                        alt=""
                                        className="c-icon"
                                    />
                                    anon8733@gmail.com
                                </div>
                                <div className="c-info-item">
                                    <a className='c-icon' href="https://www.linkedin.com/in/denis-gareev-b9a303212" target='-_blank'>
                                        <img  src={linkedin} alt=""/>
                                    </a>

                                </div>
                                <div className="c-info-item">
                                    <a href="https://github.com/Topmewan" className="c-icon" target='-_blank'>
                                        <img
                                            src={github}
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="c-info-item">
                                        <img
                                            src={location}
                                            alt=""
                                            className="c-icon"
                                        />
                                    Saint Petersburg, Russia
                                </div>
                            </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            Have questions? Email me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name='user_name'/>
                            <input type="text" placeholder='Subject' name='user_subject'/>
                            <input type="text" placeholder='Email' name='user_email'/>
                            <textarea rows='5' placeholder='Message' name='message'/>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
        </div>

    );
}

export default Contact;