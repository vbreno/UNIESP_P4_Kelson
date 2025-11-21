import React from 'react'

const Produto = ({nome, preço, categoria, quantidade}) => {
  return (
    <>
    <p>Nome:{nome} </p>
    <p>Preço:{preço}</p>
    <p>Categoria:{categoria}</p>
    <p>Quantidade: {quantidade}</p>
    <p>Status: {quantidade > 0 ? "Disponível" : "Esgotado"}</p>
    </>
  )
}

export default Produto