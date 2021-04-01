import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import BlogList from './BlogList'



export default function Home() {

    const [blogs, setBlogs] = useState(null)

//     const handleDelete = (id,e)=>{
// const newBlogs = blogs.filter((elt)=>(id !== elt.id) )
// setBlogs(newBlogs)


    // }

    useEffect(
      axios.get('http://localhost:8000/blogs')
  .then((res)=>(res.json()) )
  .catch(function (error) {
    // handle error
    console.log(error);
  }).then( console.log(json))
     )
    
    return (
        <div className="home">
          
          {/* <BlogList blog={blogs} handleDelete={handleDelete} />   */}
        </div>
    )

        }