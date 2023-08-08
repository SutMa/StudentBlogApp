import {db} from '../db.js'
import bcrypt from 'bcryptjs'


export const register = (req,res)=>{
  const q = "SELECT * FROM users WHERE email = ? OR username =?"
  db.query(q,[req.body.email, req.body.name], (err,data)=>{
    if (err) return res.json(err)
    if (data.length) return res.status(409).json('User already exist')

    //Hashing password - Create User
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const q2 = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
    const values = [
      req.body.username,
      req.body.email,
      hash,
    ]
    db.query(q2, [values], (err,data)=>{
      if (err) return res.json(err)
      return res.status(200).json("User created")
    })
  })
}

export const login = (req,res)=>{}

export const logout = (req,res)=>{}