import React from 'react'

const Demo2_box = ({ Component, name }) => {
  return (
    <div
    className={`h-[90%] w-[20%]  bg-white rounded-[10%] flex flex-col items-center justify-center`}
    style={
      { backgroundColor: name === "design" ? '#292F2B' : 'white',
        color:name === "design" ? 'white' : 'black'


       }
    } // Use inline style for custom color
  >
      <Component className=" text-[#98CE45] text-3xl" /> {/* Render the icon as a component */}
      <h1 className="capitalize  font-medium text-1xl py-2">{name}</h1>
    </div>
  );
};

export default Demo2_box
