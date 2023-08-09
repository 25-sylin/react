import React from 'react'

const Books = (props) => {
    const{name,img,price} = props
    console.log('www',name);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Books
