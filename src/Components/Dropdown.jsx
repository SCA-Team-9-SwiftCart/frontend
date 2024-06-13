// DropdownContent.jsx
import React from "react";

const Dropdown = ({ content }) => {
  return (
    <div className="absolute bg-[#FFF9E7] p-4 w-[70%] left-0 top-full z-10 shadow-lg grid grid-cols-3 ">
      {content.map((category, index) => (
        <div key={index} className="category p-4">
          <h1 className="text-2xl text-yellow font-bold mb-4">{category.title}</h1>
          {category.items.map((item, subIndex) => (
            <p key={subIndex} className="text-lg font-dm
          mb-2">
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
