import React from 'react';
import HeaderForm from '../layout/headerFrom/headerForm';
type Props = {};

const Address = (props: Props) => {
  return (
    <>
      <div className="relative mb-10 flex flex-col space-y-10 border bg-[#D3E4EC]  py-8 w-full">
        <HeaderForm title="Address" formNumber="2" />
        <div className="flex justify-between space-x-7 px-4 uppercase text-sm">
          <label className="flex flex-col w-full " htmlFor="">
            <span className="pb-2 ">Your address</span>
            <input
              className="contactInput "
              type="text"
              placeholder="ADDRESS, ZIP CODE, CITY "
            />
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="pb-2">Destination address</span>
            <input
              className="contactInput"
              type="text"
              placeholder="ADDRESS, ZIP CODE, CITY "
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Address;