import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'

const Write = () => {

  const [value,setValue] = useState('')
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='Title'/>
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: "none"}} type="file" id='file'/>
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" value="CS" id="CS"/>
          <label htmlFor="CS">CS</label>
          <input type="radio" name="cat" value="DESIGN" id="DESIGN"/>
          <label htmlFor="DESIGN">Design</label>
          <input type="radio" name="cat" value="ENGR" id="ENGR"/>
          <label htmlFor="ENGR">Engr</label>
          <input type="radio" name="cat" value="MATH" id="MATH"/>
          <label htmlFor="MATH">Math</label>
          <input type="radio" name="cat" value="JOBS" id="JOBS"/>
          <label htmlFor="JOBS">Jobs</label>
        </div>
      </div>
    </div>
  )
}

export default Write

