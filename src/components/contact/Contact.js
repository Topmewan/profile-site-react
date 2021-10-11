import './Contact.css';
import phone from '../../img/phone-volume.svg';
import linkedin from '../../img/linkedin.svg';
import github from '../../img/github.svg';
import email from '../../img/envelope-alt.svg';
import location from '../../img/map-marker.svg';
import {useRef} from "react";
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form";

const Contact = () => {
    const {register, handleSubmit,formState:{errors},reset} = useForm();
    const formRef = useRef();

    const onSubmit = (data) => {

        emailjs.sendForm(
            'service_q0hodjj',
            'template_ki2s3mf',
            formRef.current,
            'user_q9vQqP9XnTkK0yPD322D1'
        )
            .then((data) => {
                console.log(data.text);
                reset();
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
                        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                            <h1>Email me</h1>
                            <div className="ui divider"></div>
                            <div className="ui form">
                                <div className="field">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        {...register('username', {required: 'Name is required',
                                        minLength:{
                                            value:3,
                                            message:"Minimum Required length is 3",
                                        },
                                            pattern: {
                                            value:/^[a-zA-Z ]*$/,
                                                message:'Only text allowed'
                                            }
                                        })}
                                        placeholder='Name'
                                    />
                                </div>
                                {errors.username && (<p>{errors.username.message}</p>)}
                                <div className="field">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        {...register('subject',{required:'Subject is required',
                                        minLength:{
                                            value:5,
                                            message: 'Minimum Required length is 5',
                                        },
                                        })}
                                    />
                                </div>
                                {errors.subject && (<p>{errors.subject.message}</p>)}
                                <div className="field">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        {...register('email', {required:'Email is required',
                                            pattern:{
                                                value: /^\S+@\S+$/i,
                                                message: 'Invalid Email',
                                            },
                                        })}
                                    />
                                </div>
                                {errors.email && (<p>{errors.email.message}</p>)}


                                <div className="field">
                                    <label>Message</label>
                                    <textarea
                                        {...register("message",{required: "Message is required",
                                        minLength:{
                                            value:10,
                                            message: 'Minimum Required length is 10',
                                        },
                                        maxLength:{
                                            value:50,
                                            message:"Maximum Required length is 50",
                                        }
                                        })}
                                        rows='3'
                                        placeholder='Message'
                                    />
                                    {errors.message && (<p>{errors.message.message}</p>)}
                                </div>
                                <button className='fluid ui button blue'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
        </div>

    );
}

export default Contact;