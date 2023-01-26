import React from 'react'

const CardsPerson = () => {
    const me ={
        name: 'Victor Hugo',
        age: 30,
        moviefav: 'Stars Wars',
        music: 'salsita'
      }
  return (
    <div>
    <ul className="list">
        <li><b>Nombre:</b> {me.name} </li>
        <li><b>Edad:</b> {me.age}años</li>
        <li><b>Pelicula Fav:</b> {me.moviefav}</li>
        <li><b>Musica Fav:</b> {me.music}</li>
      </ul>
    </div>
  )
};

export default CardsPerson