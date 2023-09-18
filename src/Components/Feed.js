import React from 'react'
import Posts from './Posts'


const Feed = ({posts}) => {
  return (
    <div className='mx-2' >
        {
            posts.map(post =>(
                <Posts key={post.id} post={post}/> 
            ))
        }
    </div>
  )
}

export default Feed