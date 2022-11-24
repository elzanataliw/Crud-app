import React, { useEffect, useState } from 'react'
import Header from "../../components/header/Header"
import NavBar from '../../components/navbar/NavBar';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Write from '../write/Write';
import axios from "axios"
import { useLocation } from "react-router";

export default function Home() {
    // const [posts,setPosts]= useState([]);
    // useEffect(()=>{
    //     const fetchPosts = async ()=>{
    //         const res = await axios.get("/posts" + search);
    //         setPosts(res.data);
    //     };
    //     fetchPosts();
    // },[search])

    return (
        <>
            <div>
                <Header />
                {/* <div className="home">
                <Posts posts={posts}/>
                <Sidebar/> */}
                {/* </div> */}
            </div>
        </>
    )
}
