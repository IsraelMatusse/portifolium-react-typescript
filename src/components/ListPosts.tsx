'use client';
import "../styles/listposts.css";
import { ListGroup } from 'flowbite-react';
import { useEffect, useState } from "react";
import { ListPosts } from "../models/ListPosts";
import axios from "axios";
export default function ListPosts() {
  const [listPosts, setListPost]=useState<ListPosts[]>([]);

  const getListPosts =()=>{
    axios.
    get(``)
    .then((res:any)=>{
      setListPost(res.data.data);
    })
    .catch((err:any)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getListPosts()
  })


  return (
    <div>
   <div className='list_posts'>
  <ListGroup>
      <ListGroup.Item>
        Profile
      </ListGroup.Item>
      <ListGroup.Item>
        Settings
      </ListGroup.Item>
      <ListGroup.Item>
        Messages
      </ListGroup.Item>
      <ListGroup.Item>
        Download
      </ListGroup.Item>
    </ListGroup>
   </div>
    </div>

  
  )
}


