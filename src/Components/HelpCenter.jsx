import React from "react";

const HelpCenter = () => {
  return (
    <div className="bg-[#FFF9E7]">
      <ul className="space-y-4 font-semibold">
        <li>
          <a href="#">
            Place an Order
          </a>
        </li>
        <li>
          <a href="#">
            Payment Options
          </a>
        </li>
        <li>
          <a href="#">
            Track an Order
          </a>
        </li>
        <li>
          <a href="#">
            Cancel An Order
          </a>
        </li>
        <li>
          <a href="#">
            Returns & Refunds
          </a>
        </li>
      </ul>
      <div className="text-center mt-6">
        <button className="w-full py-2 bg-yellow text-white font-bold rounded">
          Live Chat
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
