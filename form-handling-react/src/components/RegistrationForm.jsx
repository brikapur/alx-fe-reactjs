import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration successful!");
      console.log({ username, email, password });

      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      <div>
        <label>Username</label>
        <br />
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username}</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <br />
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
      </div>

      <div>
        <label>Password</label>
        <br />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;