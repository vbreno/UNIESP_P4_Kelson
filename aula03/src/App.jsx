import React from 'react'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Produto from './components/Produto'

const App = () => {
  return (
    <div>
      {
        [
          {nome: "Vitor", email: "vbreno@gmail.com", curso: "sistemas para internet", media: 10.0},
          {nome:"Joao", email:"joao@email.com", curso:"sistemas para internet", media: 6.0},
          {nome:"Maria", email:"maria@gmail.com", curso:"sistemas para internet", media: 7.0}
        ].map((aluno)=>
        <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        )
      } 
      
      <br/>
      <br/>

      <p>
        {
          [
            {linguagem:"Java", dificuldade:"médio"},
            {linguagem:"C++", dificuldade:"difícil"},
            {linguagem:"Python", dificuldade:"médio"},
            {linguagem:"Javascript", dificuldade:"fácil"}
          ].map((linguagem)=> <Linguagens linguagem={linguagem.linguagem} dificuldade={linguagem.dificuldade}/>)
        }
      </p>

      <br/>
      <br/>

      <p>
        {
          [
            {nome:"Creme Dental", preço:7.99, categoria:"Higiene Pessoal", quantidade:"0"},
            {nome:"Água Sanitária", preço:2.33, categoria:"Limpeza", quantidade:"7"},
            {nome:"Macarrão", preço:2.89, categoria:"Massas", quantidade:"5"},
          ].map((produto)=> <Produto nome={produto.nome} preço={produto.preço} categoria={produto.categoria} quantidade={produto.quantidade}/>)
        }
      </p>
    </div>
  )
}

export default App