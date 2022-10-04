import ProductCards from "./components/ProductCards"
import axios from "axios"
import {useState} from 'react'
import DiscountPrice from "./components/DiscountPriceContainer/DiscountPrice";

function HomePage() {
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
    const [visible, setVisible] = useState(true);
    const [price, setPrice] = useState(0);
  return (
      <div className="flex justify-center flex-wrap relative">
          {datas.map(data => {
            const product = data.node
            const pic = product.images.edges[0].node
            const priceDecimal = product.priceRange.maxVariantPrice.amount
            const priceNow = Math.floor(priceDecimal)
            return <ProductCards 
                    key={product.id} 
                    id={product.id} 
                    img={pic.url} 
                    title={product.handle} 
                    priceProduct={priceNow} 
                    setVisible={setVisible}
                    setPrice={setPrice}
                    price={price}
                    />
        }
        )}
    {visible ? ' ' : 
      <div className="absolute -bottom-[350px] right-0 left-0">
        <DiscountPrice price={price}/>
      </div>
    }
    </div>
    )
}

export default HomePage