import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard(props) {

    const{id,title,body,author} = props.blog

    
  return (
    <div>
        <div className="blog-preview" key={id} >
          <Link to={{pathname: `/blogs/${id}`, state: { title : title,body:body,author:author}}}>
            <h2>{ title }</h2>
            <p>Written by {author }</p>
          </Link>
        </div>
        <button onClick={() =>props.deleteHandler(id)}>delete blog</button>
    </div>
  )
}

export default BlogCard;