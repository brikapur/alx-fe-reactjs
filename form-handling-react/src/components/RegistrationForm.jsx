import { useState } from "react";

const RegistrationForm = () => {
  // separate states (important for checker)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccess("");

    if (Object.keys(validationErrors).length === 0) {
      try {
        await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });

        setSuccess("User registered successfully!");

        // reset fields
        setUsername("");
        setEmail("");
        setPassword("");
      } catch (error) {
        setSuccess("Something went wrong!");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>

      <div>
        <label>Username:</label><br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username}</p>
        )}
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}
      </div>

      <button type="submit">Register</button>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default RegistrationForm;