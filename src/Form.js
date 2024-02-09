import emailjs from '@emailjs/browser';
import {useRef, useState} from 'react';

const Form = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
    
        emailjs
          .sendForm('service_qinbgjs', 'template_wk9532m', form.current, {
            publicKey: 'S3gifjZd7NgefU05j',
          })
          .then(
            () => {
              alert('Message Sent');
              setLoading(false)
            },
            (error) => {
              alert('FAILED...', error.text);
              setLoading(false)
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
            {!loading && <button>Send</button>}
                </form>
     );
}
 
export default Form;