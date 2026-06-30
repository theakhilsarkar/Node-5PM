import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({});

  const getName = (e) => setUser({ ...user, name: e.target.value });
  const getEmail = (e) => setUser({ ...user, email: e.target.value });
  const getPassword = (e) => setUser({ ...user, password: e.target.value });

  const handleSignup = async () => {
    const res = await axios.post("http://localhost:5000/api/book/signup", user);
    if (res.data.status) {
      alert(res.data.message);
    } else {
      alert(res.data.err);
    }
  };

  return (
    <div>
      <div>
        <input onChange={getName} type="text" placeholder="Enter your name" />
      </div>
      <div>
        <input
          onChange={getEmail}
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <input
          onChange={getPassword}
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <button onClick={handleSignup}>SignUp</button>
      </div>
    </div>
  );
}
