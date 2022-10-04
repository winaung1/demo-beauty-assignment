import {useState, useEffect, useRef} from 'react'

function DiscountPrice({price}) {
    const [visited, setVisited] = useState(false)
    const [reach, setReach] = useState(false)
    const [discounted, setDiscounted] = useState(0)
    const [nowPrice, setNowPrice] = useState(0)
    
    useEffect(() => {

        if(price >= 100){
            const discount = Math.floor(price * (.10));
            setDiscounted(discount)
            console.log(discount)
            setNowPrice(price - discount);
            setVisited(true)
            setReach(true)
        }
    },)


  return (
    <div className='relative w-[90%] lg:w-1/2 mx-auto shawdow h-96 rounded-t-xl'>
        <div className="notify bg-black text-white text-center h-20 flex items-center justify-center rounded-t-[30px]">
            <p className='text-xl'>Add $100 to save 10%</p>
        </div>
        <div className='flex justify-between p-5'>
            <div>
                <h1 className='text-xl lg:text-2xl text-gray-600 pb-5'>Bundle Price</h1>
                <p className={`${reach ? 'line-through text-gray-300' : ''} text-2xl lg:text-4xl font-bold  text-gray-600`}>$<span>{price}</span></p>
                {visited ? 
                <p className={`text-2xl lg:text-4xl font-bold  text-gray-600 mb-10`}>$<span>{nowPrice}</span></p>
                : '' 
                }
            </div>
            <div className='text-right'>
                <h1 className='text-xl lg:text-2xl text-gray-600 pb-5'>Your Savings</h1>
                <p className='text-right text-2xl lg:text-4xl font-bold  text-gray-600'>$<span>{discounted}</span></p>
            </div>
        </div>
        <div className='absolute bottom-24 z-50 right-0 left-0 w-[89%] rounded-full bg-pink-200 h-10 mx-auto flex space-x-20'>
            <div className={`${visited ? 'bg-green-400' : ''} absolute top-0 z-10 rounded-l-full w-[46%] md:w-[75%] ease-in duration-300 lg:w-[64%] h-full`}></div>
            <div className='absolute right-[160px] lg:right-[230px] line w-[1.5px] h-full bg-black'>
                <p className='absolute -bottom-8 -left-5'>10%</p>
            </div>
            <div className='absolute right-[115px] lg:right-[170px] line w-[1.5px] h-full bg-black'>
                <p className='absolute -bottom-8 -left-5'>15%</p>
            </div>
            <div className='absolute right-[68px] lg:right-[110px]  line w-[1.5px] h-full bg-black'>
                <p className='absolute -bottom-8 -left-5'>20%</p>
            </div>
            <div className='absolute right-[23px] lg:right-[50px]  line w-[1.5px] h-full bg-black'>
                <p className='absolute -bottom-8 -left-5'>25%</p>
            </div>
        </div>
    </div>
  )
}

export default DiscountPrice