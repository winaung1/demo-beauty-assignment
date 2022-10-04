import Image from "next/image"
import {useRef, useEffect, useState} from 'react'
import axios from "axios"
import {FaStar} from 'react-icons/fa'
import DiscountPrice from "./DiscountPriceContainer/DiscountPrice"


function ProductCards({key, id, img, title, priceProduct, setVisible, setPrice, price}) {
  const [datas, setDatas] = useState([])
  const dataUrl = 'http://localhost:3000/api/hello';
  
  const options = {
    method: 'GET',
    url: dataUrl
  };
  
  axios.request(options).then(function (response) {
      setDatas(response.data.edges);
  }).catch(function (error) {
      console.error(error);
  });
  const [arr, setArr] = useState([])
  const myPriceRef = useRef()
  
  const handleClick = (e) => {
    const btnId = e.currentTarget.id
    const priceId = myPriceRef.current.id
    const priceText = myPriceRef.current.innerText
    setVisible(false)
    if(btnId == priceId){
      setPrice(price + parseInt(priceText))
    }
    console.log('btn',btnId)
    console.log('price',priceId)
    console.log('priceText',priceText)
  }

  return (
    <div className="relative flex justify-center flex-wrap">
      {/* {datas.map(data => {
            const product = data.node
            const pic = product.images.edges[0].node
            const priceDecimal = product.priceRange.maxVariantPrice.amount
            const priceNow = Math.floor(priceDecimal) */}
            {/* return  */}
             <div key={key} className='product-container p-3'>
              <div className='image-container bg-pink-200 h-60 w-60 flex justify-center rounded-t-lg'>
                <img src={img} className='w-full h-full rounded-t-xl' objectFit='cover' alt="kjsalj"/>
              </div>
              <div className='product-description-container flex flex-col space-y-2 p-2 w-60 h-[160px] shawdow rounded-b-lg'>
                <p className='title font-bold text-sm'>{title}</p>
                <div className='review-container flex items-center gap-x-2'>
                  <div className="flex space-x-1">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                  <p className='review'>7 Reviews</p>
                </div>
                <h3 className='price text-gray-700 pb-3'>$<span  ref={myPriceRef} id={id}>{priceProduct}</span></h3>
                {/* <h3 className='price text-gray-700 pb-3'>$<span  ref={myPriceRef}  id={data.handle}>{priceNow}</span></h3> */}
                <div className='button-container mx-auto w-[98%]'>
                  <button onClick={handleClick} className='add-button bg-black text-white text-center w-full py-2 rounded-md' id={id}>Add To Bundle</button>
                </div>
              </div>
            </div>
        
        {/* }
    )} */}
  </div>
)}

export default ProductCards