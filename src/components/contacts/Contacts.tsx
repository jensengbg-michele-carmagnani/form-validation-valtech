import React from 'react';
import HeaderForm from '../layout/headerFrom/headerForm';

type Props = {};

const Contacts = (props: Props) => {
  return (
    <>
      <div className="relative mb-10 flex flex-col space-y-10 border bg-[#D3E4EC]  py-10 w-full">
        <HeaderForm title="Contact" formNumber="1" />
        <div className="flex justify-between space-x-7 px-4 uppercase text-sm ">
          <label className="flex flex-col w-full " htmlFor="">
            <span className="pb-2">Name</span>
            <input className="contactInput " placeholder="NAME" type="text" />
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="pb-2">Family Name</span>
            <input
              className="contactInput"
              placeholder="FAMILY NAME"
              type="text"
            />
          </label>
        </div>
        <div className="flex justify-between space-x-7 px-4 uppercase text-sm ">
          <label className="flex flex-col w-full " htmlFor="">
            <span className="pb-2">Email</span>
            <input
              className="contactInput bg-white rounded"
              type="email"
              placeholder="EMAIL"
            />
          </label>
          <label className="flex flex-col w-full " htmlFor="">
            <span className="pb-2">Phone number</span>
            <input
              className="contactInput"
              type="text"
              placeholder="PHONE NUMBER"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Contacts;
