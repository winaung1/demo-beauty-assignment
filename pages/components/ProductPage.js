import DiscountPrice from "./DiscountPriceContainer/DiscountPrice"
import ProductCards from "./ProductCards"
import {useState} from 'react';


function ProductPage({price, setPrice, visible, setVisible}) {

  const products = [
    {
      id: 1,
      img: '/images.png',
      title: 'Probiotic Gel Cream',
      price: 50,
    },
    {
      id: 2,
      img: '/images.png',
      title: 'Probiotic Gel Cream',
      price: 60,
    },
    {
      id: 3,
      img: '/images.png',
      title: 'Probiotic Gel Cream',
      price: 40,
    },
    {
      id: 4,
      img: '/images.png',
      title: 'Probiotic Gel Cream',
      price: 20,
    }
  
  ]
  return (
    <div className="flex flex-wrap justify-center relative h-full">
       {/* {products.map(product => (
          <ProductCards 
            key={product.id} 
            id={product.id} 
            img={product.img} 
            title={product.title} 
            priceProduct={product.price} 
            price={price} 
            setPrice={setPrice} 
            setVisible={setVisible}/>
       )
      )} */}
      {visible ? ' ' : 
      <div className="absolute -bottom-[350px] right-0 left-0">
        <DiscountPrice price={price}/>
      </div>
      }
     
    </div>
  )
}

export default ProductPage


`

`