import React, { useState } from 'react'



const State = () => {

  const [text, setText] = useState("Higor");

  return (
    <div>
      <p>{text}</p>
      <input type></input>
    </div>
  )
}

export default State
