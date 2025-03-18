import React, { useState } from 'react';
import Product from "./components/Product";
import ColorOption from "./components/ColorOption";

import { data } from './Data';

function App() {
  const [products, setProducts] = useState([...data]);

  const toggleSelection = (index) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, selected: true } : { ...product, selected: false }
    );
    setProducts(updatedProducts);
  };

  const [selectedProduct] = products.filter(product => product.selected);

  return (
    <div className="container w-full h-screen flex items-center justify-center bg-black">
      <div className="w-[98%] md:w-[50%] lg:w-[30%] aspect-[11/15] bg-white">
        <div className="w-[100%] h-[100%] pt-[6%] pb-[6%] pl-[7%] pr-[7%]">
          <div className="w-[100%] h-[100%]">
            <Product data={selectedProduct}/>
            <div className="w-[100%] h-[25%]">
              <div className="
                w-[100%] h-[20%] mt-[4%]
                flex items-center gap-1.5"
              >
                {
                  products.map((item, index) => (
                    <ColorOption key={index} data={item} handleClick={() => toggleSelection(index)}/>
                  ))
                }
              </div>
              <div className="
                mt-[4%]
                font-roboto font-normal text-[14px] leading-[16px] tracking-[0%]
                md:text-[16px] md:leading-[18px] lg:text-[18px] lg:leading-[20px]
              "
              >
                {selectedProduct.brand}
              </div>
              <div className="
                mt-[2%]
                font-roboto font-medium text-[16px] leading-[18px] tracking-[0%]
                md:text-[18px] md:leading-[20px] lg:text-[20px] lg:leading-[22px]
                text-[#0A4874]
              "
              >
                {selectedProduct.title}
              </div>
              <div className="mt-[2%] w-[100%] flex items-center gap-2">
                {
                  selectedProduct.onSale &&
                  <div className="
                    font-roboto font-normal text-[14px] leading-[16px] tracking-[0%]
                    line-through md:text-[16px] md:leading-[18px] lg:text-[18px] lg:leading-[20px]
                  "
                  >{`$${selectedProduct.price}`}</div>
                }
                <div className="
                font-roboto font-normal text-[14px] leading-[16px] tracking-[0%] text-center
                md:text-[16px] md:leading-[18px] lg:text-[18px] lg:leading-[20px] text-[#FF0000]
                ">{`$${selectedProduct.markdownPrice}`}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
