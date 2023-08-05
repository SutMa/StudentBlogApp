import React from 'react'
import img from '../img/writing.jpg'
const Menu = () => {

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


  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu