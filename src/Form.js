import emailjs from '@emailjs/browser';
import {useRef} from 'react';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qinbgjs', 'template_wk9532m', form.current, {
            publicKey: 'S3gifjZd7NgefU05j',
          })
          .then(
            () => {
              alert('Message Sent');
            },
            (error) => {
              alert('FAILED...', error.text);
            },
          );
      };

    return ( 
        <form ref={form} className=" text-black mt-20 flex flex-col w-5/6" onSubmit={sendEmail}>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    />
                <input
                    type="text"
                    name="email"
                    required
                    placeholder="Email"
                    />
                <input
                    className="mb-4 h-10"
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    />

                <textarea
                    required
                    name="message"
                    placeholder="Body"
                />
            <button>Send</button>
                </form>
     );
}
 
export default Form;