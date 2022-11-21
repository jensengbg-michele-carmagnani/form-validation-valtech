import React from 'react';
import HeaderForm from '../layout/headerFrom/headerForm';
import { Autocomplete } from '@react-google-maps/api';
type Props = {
  register: any;
  estimatePrice: string;
};

const Address = ({ register, estimatePrice }: Props) => {
  return (
    <>
      <div className="relative mb-10 flex flex-col space-y-10 border bg-[#D3E4EC]  py-8 w-full">
        <HeaderForm
          title="Address"
          formNumber="2"
          estimatePrice={estimatePrice}
        />
        <div className="flex justify-between space-x-7 px-4 uppercase text-sm">
          <label className="flex flex-col w-full " htmlFor="">
            <span className="pb-2 ">Your address</span>
            <Autocomplete className="w-full">
              <input
                {...register('startAddress', {
                  required: 'This field is required',
                })}
                className="contactInput "
                type="text"
                placeholder="ADDRESS, ZIP CODE, CITY "
              />
            </Autocomplete>
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="pb-2">Destination address</span>
            <Autocomplete>
              <input
                {...register('finalAddress', {
                  required: 'This field is required',
                })}
                className="contactInput"
                type="text"
                placeholder="ADDRESS, ZIP CODE, CITY "
              />
            </Autocomplete>
          </label>
        </div>
      </div>
    </>
  );
};

export default Address;
