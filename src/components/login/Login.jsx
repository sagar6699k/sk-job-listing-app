import axios from "axios";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const BASE_URL = "https://dev123.gigin.ai/abc/index.php/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  //use below email_id and password
  //"email" : "emailforapi@gigin.ai" ,
  //"password" : "65$az"

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}Api_controller/login_email`,
        formData
      );
      navigate("/dashboard")
      return res.data;
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <form className="login_container">
        <div className="input_div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input_div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="login_btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
