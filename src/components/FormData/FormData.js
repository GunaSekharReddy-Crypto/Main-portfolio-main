import './FormData.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com'

function FormData() {
    const [data, setData] = useState(
        {
            name: '',
            email: '',
            message:''
        }
    )
    const { name, email,message } = data;
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_es8zi3g', 'template_eoc0bz2', data, '8DLtfvodHvNa3vqfK')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

            setData({name: ' ',email: ' ',message:  ' '})
    }

    return (
        <div className="form" id='contact'>
            <h1>Get in Touch</h1>
            <p>For any queries and collaborations please leave a message to me.<br/>
             I am looking forward to 
                hearing from you!</p>
                <div className="logIn-form">
                    <form onSubmit={handleSubmit}>
                        <p>First Name</p>             
                        <input
                        required
                            className="Name"
                            name="name"
                            type="text"
                            value={name}
                            placeholder="Your Name ..."
                            onChange={changeHandler}
                        />

                        <p> Email</p>

                        <input
                        required
                            className="Role"
                            name='email'
                            type="text"
                            value={email}
                            placeholder="Email...."
                            onChange={changeHandler}
                        />
                        
                        <p for="freeform">Shoot your message</p>

                        <textarea required id="freeform" name='message' value={message} onChange={changeHandler} placeholder="Enter your Message"  rows="5" cols="50">
                        </textarea>
                        <div>
                        <button type="submit" className='submit-button' onSubmit={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default FormData;