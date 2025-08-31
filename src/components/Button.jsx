import React from "react";

const Button = (props) => {
  const Icon = props.icon;
  return (
    <div>
      <button className="flex items-center gap-[5px] bg-[#A259FF] text-white py-[10px] lg:py-[15px] px-[10px] lg:px-[30px] rounded-[10px] lg:rounded-[20px] opacity-90 hover:opacity-100 cursor-pointer font-[500]">
        {Icon && <Icon />} {props.name}
      </button>
    </div>
  );
};

export default Button;
