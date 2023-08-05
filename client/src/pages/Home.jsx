import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/writing.jpg'

const posts = [
  {
    id:1,
    title:'Post One',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad autem eaque iure soluta, fugiat ducimus, ratione facere mollitia veniam quas explicabo, esse exercitationem beatae dignissimos earum quo id. Incidunt, autem.',
    img: img
  },
  {
    id:1,
    title:'Post One',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad autem eaque iure soluta, fugiat ducimus, ratione facere mollitia veniam quas explicabo, esse exercitationem beatae dignissimos earum quo id. Incidunt, autem.',
    img: img
  },
  {
    id:1,
    title:'Post One',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad autem eaque iure soluta, fugiat ducimus, ratione facere mollitia veniam quas explicabo, esse exercitationem beatae dignissimos earum quo id. Incidunt, autem.',
    img: img
  },
  {
    id:1,
    title:'Post One',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad autem eaque iure soluta, fugiat ducimus, ratione facere mollitia veniam quas explicabo, esse exercitationem beatae dignissimos earum quo id. Incidunt, autem.',
    img: img
  }

]


const Home = () => {
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id} >
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Home