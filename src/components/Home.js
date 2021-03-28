import React from 'react'
import {useState, useEffect} from "react"
import BlogList from './BlogList'


export default function Home() {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    const handleDelete = (id,e)=>{
const newBlogs = blogs.filter((elt)=>(id !== elt.id) )
setBlogs(newBlogs)


    }

    useEffect(()=>console.log("jo")  )
    
    return (
        <div className="home">
          
          <BlogList blog={blogs} handleDelete={handleDelete} />  
        </div>
    )

        }