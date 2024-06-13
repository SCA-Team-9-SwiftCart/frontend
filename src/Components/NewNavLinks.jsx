// NewNavLinks.js
import React from "react";

const NewNavLinks = ({ link, icon1: Icon1, icon2: Icon2, onClick }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer" onClick={onClick}>
      {Icon1 && <Icon1 />}
      <span>{link}</span>
      {Icon2 && <Icon2 />}
    </div>
  );
};

export default NewNavLinks;
