import React from 'react';
type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <div className="">
      <div className="bg-[#548EAB] h-16 flex justify-end items-center">
        <h1 className="text-white font-light text-6xl px-28">Move IT</h1>
      </div>
    </div>
  );
};

export default Header;
