import React from 'react';
import { useState } from 'react';


const Header = () => {

 const[name, setName]=useState('Mario');
const [age,Setage]=useState(25);
const [blogs,setBlogs]=useState(
  [{title:'My fisrt Website',body: 'Lorem4dsdd',author:'Nomi' ,id:1},
  {title:'My Second Website',body: 'Lorem4dsdd',author:'Nomi' ,id:2},
  {title:'My Third Website',body: 'Lorem4dsdd',author:'Nomi' ,id:3}]
);
  const handleClick = () =>{
    setName('Nomi');
    Setage(22);
  }
  return (
    <div>
      <p>{name} is {age} years old</p>
      {blogs.map((blog)=>(
        <div className='blog=preview' key={blog.id}>
          <h3>
            {blog.title}
          </h3>
          <p>written by{
blog.author}</p>
        </div>
      ))}
      <button onClick = {handleClick}>Click Me</button>

    </div>
  )
}

export default Header
