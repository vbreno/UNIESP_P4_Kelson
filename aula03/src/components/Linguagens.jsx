import React from 'react'

const Linguagens = ({linguagem, dificuldade}) => {
  return (
    <div>
        <p>Linguagem: {linguagem}</p>
        <p>Dificuldade: {dificuldade} </p>
    </div>
  )
}

export default Linguagens