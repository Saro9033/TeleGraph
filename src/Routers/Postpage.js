import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {FaMarker, FaTrashAlt} from 'react-icons/fa'


const Postpage = ({ posts, handleDelete, handleUpdate }) => {
    const { id } = useParams()
    const singlePost = posts.find((post => (post.id.toString() === id)))
    return (
        <div className='container mt-3 '>
            <div className='w-100 shadow p-3 rounded-3 card'>
                {singlePost && 
                <div className='card-body'>
                <h1 style={{textTransform:'uppercase', fontWeight:'bold'}} className='card-header text-center'>{singlePost.title}</h1>
                <p className='card-text mt-1' style={{fontSize:'13px', color:'#6c7a86'}}>{singlePost.datetime}</p>
                <p  className='card-text mt-3 p-3' style={{ fontSize:'1.2rem', textJustify:'inter-word', fontFamily:'poppins'}}>{singlePost.body}</p>
                <div className='d-flex flex-row justify-content-between '>
            <button className='btn btn-danger  shadow' onClick={() => handleDelete(singlePost.id)}> Delete post  <FaTrashAlt/> </button>
            <Link className=' btn btn-primary ' to={`/edit/${singlePost.id}`}><button className='btn text-light'> Edit <FaMarker/> </button></Link> 
</div>
                </div>}
                {!singlePost && 
                <h2>Post Not Found!!</h2> }
            </div>
        </div>
    )
}

export default Postpage