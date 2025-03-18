import React, {useState} from "react";

const Product = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    backgroundImage: `url(./assets/images/${isHovered ? data.hoveredImage : data.backgroundImage})`,
    backgroundSize: isHovered ? 'auto 100%' : 'auto 90%'
  }

  return (
    <div className="
          w-[100%] h-[75%]
          border border-background-grey-5 rounded-[10px]
          cursor-pointer bg-no-repeat bg-center bg-cover
        "
         style={style}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
    >
      {
        data.onSale && <div className="
            w-[26%] border-2 border-[#FF0000] rounded-[2vw]
            top-5
            left-6
            p-1
            text-[17px]
            font-medium
            text-[#FF0000]
            text-center
            relative
          "
        >On Sale!</div>
      }
    </div>
  )
}

export default Product;