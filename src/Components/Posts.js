import React from 'react'
import { Link } from 'react-router-dom'


const Posts = ({ post }) => {
  return (

    <Link to={`/postpage/${post.id}`} style={{ textDecoration: 'none' }}>
      <div id='Card' className='container card rounded-4 shadow my-3 p-3 '>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
        <p>{(post.body).length < 30 ? post.body : `${(post.body).slice(0, 30)}...`}</p>
      </div>
    </Link>
  )
}

export default Posts