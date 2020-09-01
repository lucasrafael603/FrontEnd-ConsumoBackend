//import imagem do assets tbm
//Todo componente de uma app react, é uma função que retorna HTML
//import './App.css'
//App seria todos os meus componentes agrupados
import React, {useState, useEffect} from 'react'
import Header from '../src/components/Header'
import Botao from './components/Button'
import api from '../src/services/api'
import Product from './components/Product'

function App(){


  const [projects, setProjects] = useState([])
  //return <h1>Hello World</h1>
  
  useEffect(() =>{

    api.get('/cadastro').then((response) => {
         setProjects(response.data)
    })

  },[projects])

  async function handleAddProject(){

      //projects.push(`Novo Project ${Date.now()}`)
      //setProjects([...projects, `Novo Project ${Date.now()}`])
     const response = await api.post('/cadastro', {
        name:  `Novo Project ${Date.now()}`,
        age: 18
      })

    console.log(response.data)
     const project = response.data

      setProjects([...projects, project])

      console.log(projects)
  }

  return (
  <>
  <Header title='Projects'/>

  <ul>

    {projects.map((project) => {

     return <li key={project.id}> {project.name}  </li>

    })}

  </ul>

  <button type='button' onClick={handleAddProject}> Adicionar </button>

  <Botao/>
  <br></br>
  <Product/>

  </>
  )



}

export default App