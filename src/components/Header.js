import React from 'react'
//Sempre que for utilizar JSX precisa-se importar a lib do react


export default function Header({title/*, children*/}){

  return (<header>
        <h1>{title}</h1>
    
     </header>)

}
//{children}