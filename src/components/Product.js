import React, {useEffect, useState} from 'react'
import api from '../services/api'


export default function Product(){

      const [Product, setProduct] = useState([])


      useState(()=> {

      api.get('/products').then((response) => {

          setProduct(response.data)
            
      })

      },[])

     async function handleAddProduct(){

         const response = await api.post('/products', {

            nameProduct: 'Celular',
            price: 500


          })
          
          console.log(Product)

          const newProduct = response.data

          setProduct([...Product, newProduct])

      }


      return (

        <>
          <h1> Aba de Produtos </h1>

          <ul>

          {Product.map((product) =>{

              return (

                <li key={product.id}> {product.nameProduct} </li>

              )
                
                

              

          })}



          </ul>



          <button type='button' onClick={handleAddProduct}> Adicionar Produto </button>
          </>
      )




}