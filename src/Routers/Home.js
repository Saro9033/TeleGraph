import React from 'react'
import Feed from '../Components/Feed'

const Home = ({ posts, search, setSearch }) => {
  return (
    <div className='mt-5 mb-5 container '>
        <form className='d-flex mb-5 justify-content-end w-100'  onSubmit={e => e.preventDefault()}>
          <input  style={{width:'40%'}} autoFocus value={search} onChange={(e) => setSearch(e.target.value)} type="search"
           className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" className="btn btn-outline-primary">search</button>
        </form>
    

      {
        posts.length ? (<Feed posts={posts} />) : (<h2 className='mt-5 text-center'> No posts to dispaly.</h2>)
      }

    </div>
  )
}

export default Home