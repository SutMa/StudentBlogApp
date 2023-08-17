export const getPosts = (req,res)=>{
  const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts"
}

export const getPost = (req,res)=>{
  res.json('from controller')
}

export const addPost = (req,res)=>{
  res.json('from controller')
}

export const deletePost = (req,res)=>{
  res.json('from controller')
}

export const updatePost = (req,res)=>{
  res.json('from controller')
}