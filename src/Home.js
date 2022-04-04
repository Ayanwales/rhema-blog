/*import React from 'react'
import { v4 as uuid_v4 } from 'uuid'
import BlogList from './BlogList'
import Create from './Create'
import blogs from './data'

 const Home = () => {
  const [blogs, setBlogs] = React.useState([
    
  ])
  const [name, setName] = React.useState('mario')  


 

  const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  

  return (
    <div className='Home'>
      <BlogList blogs={blogs} title= "All Blogs" handleDelete = {handleDelete} />
      <button value={name} onClick={() => setName('luigi')}>Change name</button>
      
    </div>
  )
}
export default Home*/ 
