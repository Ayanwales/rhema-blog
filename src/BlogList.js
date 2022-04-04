//import { Link } from 'react-router-dom';

//import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

/*const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 

export default BlogList;*/

const BlogList = ({ blogs, head, handleDelete }) => {
  
  const deleteHandler = (id) => {
    handleDelete(id);
  };
  
  return (
    <div className="blog-list" >
      <h2>{ head }</h2> 
      {blogs.map(blog => (
        <BlogCard blog={blog} key = {blog.id} deleteHandler={deleteHandler}/>  
      ))}
    </div>
  );
}
 
export default BlogList;