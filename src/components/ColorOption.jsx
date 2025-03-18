import React from 'react';

const ColorOption = ({data, handleClick}) => {

  const style = {
    backgroundColor: data.color
  }

  return (
    data.selected ? (
      <div
        className="aspect-[1/1] h-full p-1
          border-2 border-[#0A4874] rounded-[50%] flex items-center justify-center box-border"
        onClick={handleClick}
      >
        <div className="w-full h-full rounded-full cursor-pointer" style={style} />
      </div>
    ) : (
      <div
        className="aspect-[1/1] h-full flex items-center justify-center"
        onClick={handleClick}
      >
        <div className="w-[70%] h-[70%] rounded-full cursor-pointer" style={style} />
      </div>
    )
  );
}

export default ColorOption;