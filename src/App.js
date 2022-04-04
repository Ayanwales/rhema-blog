import React from 'react'
import Navbar from './Navbar';
import BlogList from './BlogList';
//import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { v4 as uuid_v4 } from 'uuid'



function App() {
  const [blogs, setBlogs] = React.useState([
    {
      title: "Lifestyle",
      body: "To cope with life, what we unconsciously do is try to make the inevitable uncertainties more certain. We do this by feeling, then “knowing” (when we can’t really know, but like to feel we do). We form categories so we can file ourselves, each other and our experiences into tidy boxes. We turn what is inchoate into language to pin it down and we create narratives and meanings that make us feel less unsure. We also remember, forget and fantasise to order our experiences and protect ourselves from the existential given of uncertainty. Any sudden adjustments we have to make – parenthood is one such adjustment – can cause us to become even more intolerant of uncertainty and compelled to tie life down into neat parcels of foregone conclusions.",
      author: "Edward",
      id: 1
    },
    {
      title: "Politics!",
      body: "The prime minister launched the Conservative party’s election campaign, saying he did not want the vote, but felt he had had not choice but to call it. Boris Johnson, whose trustworthiness has been questioned by some who have worked with him, gave a speech in Birmingham that was riddled with misleading and outright false claims. Johnson had earlier used No 10 as a backdrop for a speech in which he made several similar claims. ",
      author: "Toney",
      id: 2
    },
    {
      title: "Football in Africa",
      body: "After beating Egypt in the 2021 Africa Cup of Nations grand final, Senegal added insult to injury as they overcame the Pharaohs in the continental play-off decider to book their ticket for Qatar.Ghana defied the odds to beat Nigeria, while Cameroon, Morocco and Tunisia left the likes of Algeria, DR Congo and Mali in their wake, respectively.",
      author:"Peter",
      id: 3
    }
  ])
  

  const addForm = (title, body, author) => {
    console.log('form submitteeed')
    setBlogs([...blogs, { id: uuid_v4(), title,body,author }])
  }

const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <BlogList blogs={blogs} head= "All Blogs" handleDelete = {handleDelete} />
            </Route>
            <Route path="/create">
              <Create addForm={addForm}/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;