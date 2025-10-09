import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstouComSono from './components/EstouComSono'


const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={true}/>
      <EstouComSono comSono={true}/>
    </div>
  )
}

export default App