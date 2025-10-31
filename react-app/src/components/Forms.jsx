import React, { useState } from "react";

const Forms = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Invali email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be atleast 6 character";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Add to list
      setUsers((prev) => [...prev, { ...formData, id: Date.now() }]);
      setFormData({ email: "", password: "" });
      setErrors({});
    }
  };

  console.log(users);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Form</h2>
      
      {/* Control form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.email}
            name="email"
            placeholder="Enter your email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={handleChange}
            value={formData.password}
            name="password"
            placeholder="Enter your password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {/*  */}
      <h3>User list</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.email}</strong> - {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forms;
