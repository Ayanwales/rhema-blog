import React from 'react'
import { useHistory} from "react-router-dom";
//import useFetch from "./useFetch";
import { useLocation } from "react-router-dom";
//import { useParams } from "react-router-dom";


const BlogDetails = () =>{
  //const {id,title,body, author} = props
  //const { id } = useParams();
  
  const location = useLocation()


  //const { data: blog, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5/' + id);
  const history = useHistory();
  


  const handleClick = () => {
    //fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5' + blog.id, {
      //method: 'DELETE'
    //}).then(() => {
     history.replace({ pathname: '/', state: {}})
      //history.push('/');
    //}) 
  }
  return (
    <>
        <div className="blog-details" key={location.state.id}>
            <article>
              <h2>{ location.state.title }</h2>
              <h4>Written by { location.state.author }</h4>
              <div>{ location.state.body }</div>
              <button onClick={handleClick}>delete</button>
            </article>
        </div>
    </>
  );
}
 
export default BlogDetails;