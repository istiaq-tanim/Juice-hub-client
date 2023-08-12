import Cover from './../../Shared/Cover';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_whxkckq', 'template_nxrilju', form.current, '7-j2YtG096fYUjW-C')
        .then((result) => {
            if (result.status) {
                Swal.fire({

                    position: 'top-end',
                    icon: 'success',
                    title: 'Email Sent Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                if (form.current) {
                    form.current.reset();
                }
            }
        }, (error) => {
            console.log(error.text);
        });
};
    return (
        <div>
            <Cover title="Contact With Us" img="https://i.ibb.co/B2J3qSd/cocktail-g0ac24ef4b-1280.jpg"></Cover>

            <p className="font-bold italic text-emerald-600 mt-10 text-3xl text-center">Get in touch</p>

            <div
                className="mt-10 flex md:flex-row flex-col
                                             gap-6 max-w-5xl bg-[#ded8d8] md:p-6 p-2 rounded-lg mx-auto"
            >
                <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
                    <input type="text" name="from_name" placeholder="Your Name" className="px-2 py-3 text-black" />
                    <input type="Email" name="email" className="px-2 py-3 text-black"
                        placeholder="Your Email Address" />
                    <textarea placeholder="Your Message" name="message" className="px-2 py-1 text-black" rows={10}></textarea>
                    <input type="submit" className="flex group justify-center items-center mx-auto w-fit my-2 py-3 px-6 rounded-md bg-red-300 font-semibold cursor-pointer" value="Let's Talk" />
                </form>

            </div>
        </div>
    );
};

export default Contact;