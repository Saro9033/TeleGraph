import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Routers/Home'
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import NewPost from './Routers/NewPost';
import { format } from 'date-fns'
import About from './Routers/about';
import Missing from './Routers/Missing';
import Footer from './Components/Footer';
import Postpage from './Routers/Postpage';
import api from './Api/posts';
import EditPost from './Routers/EditPost';
import { DataProvider } from './Context/DataContext';

/* This Router Folder contains/covers  "Routers, Axios CRUD operations, Custom HOOKS, and Context" */

function App() {

  //To find user search
  const [search, setSearch] = useState('')
  const Navigate = useNavigate()

  const [posts, setPosts] = useState([])

  //To filter search in post
  const [seachResult, setSearchResult] = useState([])

  // To add new post
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  //To show message when user delete a post
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [showAddMessage, setShowAddMessage] = useState(false);
  const [editMessage, setEditMessage] = useState(false);

   // To Update post
   const [editTitle, setEditTitle] = useState('')
   const [editBody, setEditBody] = useState('')

   //To get error and loading from axios
   const [errorAxios, setErrorAxios] = useState(null)
   const [isLoadAxios, setIsLoadAxios] = useState(true)


//To fetch posts data into json server using axios
useEffect(()=>{
  const Request = async () =>{
    try {
      const response = await api.get('/posts');
      setPosts(response.data)
    } catch (error) {
      if(error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }else{
        setErrorAxios(`Error : ${error.message}`);
      }    
    }
    finally{
      setIsLoadAxios(false)
    }
  }
  Request()
}, [])


//to filter searchResults
  useEffect(() => {
    const filtered = posts.filter(item => (
      ((item.title).toLowerCase()).includes(search.toLowerCase()) ||
      ((item.body).toLowerCase()).includes(search.toLowerCase())))

    setSearchResult(filtered.reverse())

  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM, dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }

    // To add new posts to db.json using axios
    try {
      const response = await api.post('/posts', newPost)
      const allPost = [...posts, response.data]
      setPosts(allPost)
    } catch (error) {
      setErrorAxios(`Error : ${error.message}`);
  
    }

    //clearing default values and navigate to homepage after submit
    setPostTitle('')
    setPostBody('')
    Navigate('/')

       //TO display information message
   setShowAddMessage(true);
   setTimeout(() => {
    setShowAddMessage(false);
   }, 2000); // 3000 milliseconds = 3 seconds


  }
 
  const handleDelete = async (id)=>{
    alert("Are you sure to delete this post?")
    if(alert){
  // To delete posts to db.json using axios
  try {
   await api.delete(`/posts/${id}`)
  const deleted=  posts.filter(post => post.id !== id)
  setPosts(deleted)  }
  catch (error) {
    setErrorAxios(`Error : ${error.message}`);
  }

   Navigate('/')

   //TO display information message
   setShowDeleteMessage(true);
   setTimeout(() => {
    setShowDeleteMessage(false);
   }, 2000); // 2000 milliseconds = 2 seconds
  }
  }

  const handleUpdate = async (id)=>{
    const datetime = format(new Date(), 'MMMM, dd, yyyy pp')
    const updatePost = { id, title: editTitle, datetime, body: editBody }
    try {
      const response = await api.put(`/posts/${id}`, updatePost)
      setPosts(posts.map(m => m.id===id ? {...response.data} : m))
      setEditTitle('')
      setEditBody('')
      Navigate('/')
    } catch (err) {
      setErrorAxios(`Error : ${err.message}`);
    }

       //TO display information message
   setEditMessage(true);
   setTimeout(() => {
    setEditMessage(false);
   }, 2000); // 2000 milliseconds = 2 seconds

  }
  return (

    <div style={{ marginBottom: '5rem' }}>
      <DataProvider>
       <Navbar />
      </DataProvider>
      {showDeleteMessage && (
        <div id='message' className='h5 text-center py-2 bg-danger w-100 shadow rounded-bottom '>Post deleted!!</div>
      )}  {showAddMessage && (
        <div id='message' className='h5 text-center py-2 bg-success w-100 shadow rounded-bottom '>New Post Added!!</div>
      )}
      {editMessage && (
        <div id='message' className='h5 text-center py-2 bg-info w-100 shadow rounded-bottom '>Post Edited!!</div>
      )}
      {errorAxios && <h1 className='text-center mt-5'>{errorAxios}</h1>}
      {isLoadAxios && <h1 className='text-center mt-5'>Loading...</h1>}
      {!errorAxios && !isLoadAxios &&
      <Routes>
      
        <Route path='/' element={<Home posts={seachResult}  search={search} setSearch={setSearch} />} />
        <Route path='/newpost' element={<NewPost postBody={postBody} setPostBody={setPostBody} postTitle={postTitle}
          setPostTitle={setPostTitle} handleSubmit={handleSubmit} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />

        <Route path='/postpage/:id' element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='/edit/:id' element={<EditPost posts={posts} handleUpdate={handleUpdate} editBody={editBody} 
                                  setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle} />} />
      
      </Routes> }
      <Footer />
      
    </div>
  );
}


export default App;