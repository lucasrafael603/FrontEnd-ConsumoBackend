// import {  soma } from '../src/soma';
// console.log(soma(1 , 2))
//Index é o arquivo que faz o intermediario ligando todos os nossos componentes com a pagina HTML do public
import React from 'react'
import { render } from 'react-dom'
import App from './App'
//import './App.css'

//render(<h1>Hello World</h1>, document.getElementById('app'))

render(<App/>, document.getElementById('app'))
