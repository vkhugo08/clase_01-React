import React from 'react'

const Card = ({title,content,background,color}) => {

  const objcolor = {
    color:color,
    backgroundColor:background
  }


  return (
    <div> 
      <ul className='card' style={objcolor} >
        <h1>{title}</h1>
        <li>{content[0]}</li>
        <li>{content[1]}</li>
        <li>{content[2]}</li>
        <li>{content[3]}</li>
      </ul>
      </div>
  )
}

export default Card