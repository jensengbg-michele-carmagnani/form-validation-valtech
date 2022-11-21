import React from 'react';
import HeaderForm from '../layout/headerFrom/headerForm';

type Props = {
  register: any;
  inputError: any;
  estimatePrice: string;
};

const Contacts = ({ register, estimatePrice, inputError }: Props) => {
  return (
    <div className="relative mb-10 flex flex-col space-y-10 border bg-[#D3E4EC]  py-10 w-full">
      <HeaderForm
        title="Contact"
        formNumber="1"
        estimatePrice={estimatePrice}
      />
      <div className="flex justify-between space-x-7 px-4 uppercase text-sm ">
        <label className="flex flex-col w-full " htmlFor="">
          <span className="pb-2">First Name</span>
          <input
            className="contactInput"
            {...register('firstName', {
              required: 'This field is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
            placeholder="NAME"
            type="text"
          />
          <p className="text-red-500 mt-3">{inputError.firstName?.message}</p>
        </label>
        <label className="flex flex-col w-full" htmlFor="">
          <span className="pb-2">Last Name</span>
          <input
            {...register('lastName', {
              required: 'This field is required',
              minLength: { value: 2, message: 'Minimum length should be 2' },
            })}
            className="contactInput"
            placeholder="LAST NAME"
            type="text"
          />
          <p className="text-red-500 mt-3">{inputError.lastName?.message}</p>
        </label>
      </div>
      <div className="flex justify-between space-x-7 px-4 uppercase text-sm ">
        <label className="flex flex-col w-full " htmlFor="">
          <span className="pb-2">Email</span>
          <input
            {...register('email', {
              required: 'This field is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
            className="contactInput bg-white rounded"
            type="email"
            placeholder="EMAIL"
          />
          <p className="text-red-500 mt-3">{inputError.email?.message}</p>
        </label>
        <label className="flex flex-col w-full " htmlFor="">
          <span className="pb-2">Phone number</span>
          <input
            {...register('phoneNumber', {
              required: 'This field is required',
              minLength: { value: 11, message: 'Minimum length should be 11' },
            })}
            className="contactInput"
            type="number"
            placeholder="PHONE NUMBER"
          />
          <p className="text-red-500 mt-3">{inputError.phoneNumber?.message}</p>
        </label>
      </div>
    </div>
  );
};

export default Contacts;
