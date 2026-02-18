import { useState } from 'react';
const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name:'', email: ''});
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button type="submit">Submit</button>
        </form>
    );
    };
export default RegistrationForm;