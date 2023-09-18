import React from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) => {
  return (
    <div className='container  my-4' style={{width:'90%'}}>
        <h2>Add New Post</h2>
        <form className='bg-info shadow rounded-3 px-4 py-2 d-flex flex-column align-items-center'  onSubmit={handleSubmit}>
           <div className='w-100'> <label htmlFor="title">Title: </label>
            <input className='form-control shadow mb-4' type="text" autoFocus required value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} 
            placeholder='Title'/></div> 
           <div className='w-100'>   <label htmlFor="content">Content: </label>
            <textarea className='form-control shadow mb-4' cols="30" rows="15" required value={postBody} onChange={(e)=>setPostBody(e.target.value)} 
            placeholder='Type your content...'></textarea></div> 
            <input type="submit"  className='btn btn-danger rounded-4 shadow w-50 p-2 mb-3' />
        </form>
    </div>
  )
}

export default NewPost