'use client';
import "../styles/listposts.css";
import { ListGroup } from 'flowbite-react';
import { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../models/ListPosts";
import { API_ENDPOINTS } from "../data/endpoint";
import { Province } from "../models/Province";
export default function ListPosts() {
 const [posts, setPosts]=useState<Post[]>([]);
 const [provinces, setProvinces]=useState<Province[]>([])

  const getPosts = async()=>{
    try{
      const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data=response.data;
      setPosts(data);
      console.log(data);
    }catch(err){
      console.log(err)
    }
   
  }

  const getProvinces= async()=>{
    try{
      const response=await
      axios.get("http://localhost:8086/api/provinces");
      const data=response.data;
      setProvinces(data);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getPosts()
    getProvinces()
  }, [])
  
  return (
    <div>
      <h1>Posts</h1>
    {posts.length===0 ? (<p> <Loader /> </p> ) : (posts.map((post)=>(
      <div className="list_posts" key={post.id}>
          <h2>{post.title}</h2> 
         <Link to={`/post/${post.id}`}  id="btn">
            Ler mais
           </Link>
          
         
      </div>
    ))) }
   
  </div>
  )
}


