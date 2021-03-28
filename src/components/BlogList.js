import React from 'react'

export default function BlogList({blog,handleDelete}) {
    // console.log(props)
    
    return (
        <div className="blog-list">
            
            {blog.map((elt,index)=>(

<div className="blog-preview" key={elt.id} >

    <h2>{elt.title} </h2>
    <p>{elt.author} </p>
    <button onClick={ (e)=>{handleDelete(elt.id)  } }> delete blog</button>
    
</div>
)   )    }

        </div>
    )
}
