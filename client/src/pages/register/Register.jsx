import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Lookist from "../../assets/lookist.png"
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <div className="BackgroundRegisterLogin object-contain bg-fixed fixed w-screen h-screen">
        <NavBar />
        <div className="items-start px-5 justify-center h-[550px] w-[450px] bg-white top-1/2 left-1/2 relative -translate-x-1/2 -translate-y-[325px] bg-opacity-30 rounded-xl border">
          <img src={Lookist} alt="" className="scale-[0.70] mx-auto" />
          <form className="flex flex-col mt-0 w-[400px] mx-auto" onSubmit={handleSubmit}>
            <label className="mt-1">Username</label>
            <input
              type="text"
              className="rounded-md text-black p-3"
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="mt-4">Email</label>
            <input
              type="text"
              className="rounded-md text-black p-3"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-4">Password</label>
            <input
              type="password"
              className="rounded-md text-black p-3"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mt-7 cursor-pointer bg-biru-tombol border text-white rounded-lg p-2 hover:bg-kuning hover:text-black" type="submit">
              Register
            </button>
            <div className="mt-4">
              Already have an account ? <Link className="link text-kuning hover:text-biru-muda" to="/login"> Login now! </Link>
            </div>
          </form>
          {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
      </div>
    </>
  );
}
