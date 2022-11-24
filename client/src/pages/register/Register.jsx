import React from "react";
import axios from "axios";
import { useState } from "react";
import Lookist from "../../assets/lookist.png";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http:localhost:5000/api/auth/register", {
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
    <div className="bg-l-pattern h-screen w-screen relative">
      <div className="bg-white bg-opacity-30 rounded-xl flex items-center justify-center space-y-5 mx-auto h-[525px] w-[475px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <div className="Register">
          <div><img src={Lookist}
            alt="Logo lookist" class="mx-auto mb-0
           object-contain scale-75 -translate-y-6"></img></div>
          <p class="text-poppins text-judul2 text-white mt-0 pt-1 mb-2 text-center">
            Please register if you don’t have an account yet!
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div class="mb-6 space">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div class="mb-6">
              <input
                type="text"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-6">
              <input
                type="password"
                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="text-center  lg:text-left">
              <button type="submit"
                class="inline-block px-7 py-3 bg-biru-abu text-white font-poppins text-teks1 leading-snug uppercase rounded-lg shadow-md hover:bg-kuning hover:shadow-lg focus:bg-kuning focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:text-biru-abu">
                Register
              </button>
            </div>
          </form>
          <p class="text-white font-poppins text-teks1 mt-2 pt-1 mb-0">
            Already have an account?
            <a
              href="#!"
              class="text-white font-poppins text-teks1 ml-2 hover:text-kuning focus:text-kuning transition duration-200 ease-in-out">
              Login now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}