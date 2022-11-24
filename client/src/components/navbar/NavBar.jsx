import React from 'react'
import L from "../../assets/L.png"
import search from "../../assets/search.png"
import Profile from "../../assets/profile.png"
import Write from '../../pages/write/Write'
import Home from '../../pages/home/Home'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div class="mx-5 place-self-stretch">
            <nav class="container min-w-full content-center mx-auto items-center px-5 h-20 bg-biru-muda rounded-lg mt-5 flex justify-between">
                <div class="self-center">
                    <img src={L} alt="lookist logo" class="object-contain scale-90" />
                </div>
                <div class="hidden md:flex space-x-12 self-center text-white font-poppins font-semibold items-center text-xl">
                    <a href="" class="hover:text-kuning"><Link to="/home">Home</Link></a>
                    <a href="" class="hover:text-kuning">About</a>
                    <a href="" class="hover:text-kuning">Contact</a>
                    <a href="" class="hover:text-kuning"><Link to="/write">Write</Link></a>
                    <a href="" class="hover:text-kuning"><Link to="/login">Logout</Link></a>
                </div>
                <div class="flex space-x-7 items-center self-center">
                    <a href=""><img src={search} alt="" class="object-cover cursor-pointer" /></a>
                    <a href=""><img src={Profile} alt="" class="cursor-pointer" /></a>
                </div>
            </nav>
        </div>
    )
}


