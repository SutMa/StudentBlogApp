import React from 'react'
import img from '../img/writing.jpg'
import userImg from '../img/profile.png'
import Edit from '../img/edit-text.png'
import Delete from '../img/bin.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu.jsx'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={img} alt="" />
        <div className="user">
          <img src={userImg} alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 3 Days Ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ad numquam possimus eius pariatur asperiores beatae, quas sit, maiores nobis fuga quam ipsam perferendis reiciendis ex quibusdam facere porro maxime?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque ullam eligendi rem dicta quis fuga asperiores non expedita. Nemo magnam officia autem asperiores, aliquam vel necessitatibus quaerat eius veniam.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas laborum, commodi fuga hic accusantium veniam alias eligendi molestiae obcaecati est adipisci quo aliquam reiciendis enim doloribus dolorem dolores! Saepe. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit animi ullam nisi minima sunt suscipit natus maiores, obcaecati officiis ex laboriosam doloremque quas perspiciatis magni veritatis labore iusto iure et.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo adipisci illo! Voluptatibus ut quibusdam unde, id, cupiditate eveniet dignissimos repudiandae similique numquam at asperiores veniam? Porro deserunt ex provident.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laudantium beatae, minima quos asperiores error harum distinctio necessitatibus facere impedit cum ut reiciendis! Laboriosam distinctio soluta necessitatibus aspernatur fuga aliquid exercitationem unde pariatur reiciendis possimus placeat impedit neque, hic sunt dolor repellendus corrupti quidem in odit error earum accusantium! Iure, porro. Odit possimus iusto voluptates quos a nisi id rem, sint, qui recusandae iste repellat amet deleniti itaque voluptas aperiam impedit reprehenderit! Quae at iste sequi odit ducimus. Sint asperiores atque officiis. Beatae sit ducimus vero adipisci repellendus aliquid non, placeat nihil, deserunt quae unde earum rerum est nostrum obcaecati!</p>
      </div>
        <Menu/>
    </div>
  )
}

export default Single