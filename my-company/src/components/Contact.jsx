import { useState } from "react";
function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };
    return(
        <div style={{ padding: '20px'}}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{ dislay: 'block', margin: '10px 0'}}
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', margin: '10px 0' }}
            />
            <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ dispaly: 'block', margin: '10px 0' }}
            />
            <button type="Submit">Send Message</button>
            </form>
        </div>        
    );
}
export default Contact;