import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar m-5 p-7 bg-abu-abu rounded-lg flex flex-col items-center">
      <div className="flex flex-col items-center">
        <span className="m-2 p-1 w-4/5 border-y-white border-y-2 text-xs text-white font-semibold leading-5 text-center">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt="" className="mt-4"
        />
        <p className="p-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <span className="m-2 p-1 w-4/5 border-y-white border-y-2 text-xs text-white font-semibold leading-5 text-center">CATEGORIES</span>
        <ul className="mb-8 list-none">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="inline-block w-1/2 mt-4 cursor-pointer">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <span className="m-2 p-1 w-4/5 border-y-white border-y-2 text-xs text-white font-semibold leading-5 text-center">FOLLOW US</span>
        <div className="mt-4 w-[250px] flex items-center justify-center">
          <i className="text-base ml-3 cursor-pointer fab fa-facebook-square"></i>
          <i className="text-base ml-3 cursor-pointer fab fa-twitter-square"></i>
          <i className="text-base ml-3 cursor-pointer fab fa-pinterest-square"></i>
          <i className="text-base ml-3 cursor-pointer fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
