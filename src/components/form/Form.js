import './Form.css';
// import './form.scss';
import contact from '../../img/contact.png';
import {useRef} from "react";
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form";


const  Form = () => {
    const {register, handleSubmit,formState:{errors},reset,trigger} = useForm();
    const formRef = useRef();

    const onSubmit = (data) => {

        emailjs.sendForm(
            'service_q0hodjj',
            'template_ki2s3mf',
            formRef.current,
            'user_q9vQqP9XnTkK0yPD322D1'
        )
            .then((result) => {
                console.log(result.text);
                reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='big'>
            <div className="container">
                <div className="content">
                    <div className="image-box">
                        <img src={contact} alt=""/>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <div className="topic">Send me a message</div>
                        <div className="input-box">
                            <input type="text"
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
                                   onKeyUp={()=> {
                                       trigger('username');
                                   }}

                                   placeholder='Enter you Name'

                            />
                                {/*<label>Enter your name</label>*/}
                        </div>
                        {errors.username && (<p className='p-valid'>{errors.username.message}</p>)}
                        <div className="input-box">
                            <input
                                type="email"
                                {...register('email', {required:'Email is required',
                                    pattern:{
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid Email',
                                    },
                                })}

                                onKeyUp={()=> {
                                    trigger('email');
                                }}

                                placeholder='Enter you email'
                            />
                                {/*<label>Enter your email</label>*/}
                        </div>
                        {errors.email && (<p className='p-valid'>{errors.email.message}</p>)}
                        <div className="message-box">
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

                                onKeyUp={()=> {
                                    trigger('message');
                                }}
                                placeholder='Enter you message'
                                rows='3'

                            />
                            {/*<label>Enter your message</label>*/}
                        </div>

                        {errors.message && (<p className='p-valid'>{errors.message.message}</p>)}
                        <div className="input-box">
                            <input type="submit" value="Send Message"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;