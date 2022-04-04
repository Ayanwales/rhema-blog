import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = (props) => {

  const {addForm} = props

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Peter');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    //const blog = { title, body, author };
  //  fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5/', {
    //  method: 'POST',
      //headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(blog)
    //}).then(() => {
      //* history.go(-1);
      history.push('/');
    //})
    console.log('form submitted')
    if(title === "" || body === ""){
      alert('All fields are mandatory')
      return
    }
    else{
    addForm(title, body,author)
    setBody('')
    setTitle('')
    setAuthor('Edenut')
    }    
  }
  
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Peter">Peter</option>
          <option value="Edenut">Edenut</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
} 
export default Create;