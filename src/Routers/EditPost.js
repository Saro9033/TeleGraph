import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts, handleUpdate, editBody, setEditBody, editTitle, setEditTitle  }) => {
    const { id } = useParams()

    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() =>{
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])
    
  return (
    <div className='container  my-4' style={{width:'90%'}}>
        { editTitle && <>
    <h2>Edit Post</h2>
    <form className='bg-info shadow rounded-3 px-4 py-2 d-flex flex-column align-items-center'  onSubmit={e=> e.preventDefault()}>
      <div className='w-100'> <label htmlFor="title">Title: </label>
        <input className='form-control shadow mb-4' type="text" autoFocus required value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} 
        placeholder='Title'/> </div> 
        <div className='w-100'> <label htmlFor="content">Content: </label>
        <textarea className='form-control shadow mb-4' cols="30" rows="10" required value={editBody} onChange={(e)=>setEditBody(e.target.value)} 
        placeholder='Type your content...'></textarea> </div>
        <input type="submit" onClick={()=> handleUpdate(post.id)} className='btn btn-danger  rouded-4 shadow w-50 p-2  mb-5' />
    </form> </> }

    {!editTitle && <>
    <h2 className='text-center mt-5'>Your Post is Page Not Found</h2>
    </>}
</div>
  )
}

export default EditPost