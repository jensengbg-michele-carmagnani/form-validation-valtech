import React from 'react';
import HeaderForm from '../layout/headerFrom/headerForm';
type Props = {
  register: any;
  estimatePrice: string;
};

const MoveInformation = ({ register, estimatePrice }: Props) => {
  return (
    <>
      <div className="relative mb-10 flex flex-col space-y-10 border bg-[#D3E4EC]  py-8 w-full uppercase text-sm">
        <HeaderForm
          title="Move details"
          formNumber="3"
          estimatePrice={estimatePrice}
        />
        <div className="flex justify-between space-x-7 px-4 ">
          <label className="flex flex-col w-full " htmlFor="">
            <span className="pb-2">residential area square meters</span>
            <input
              className="contactInput "
              type="text"
              {...register('squareMeters')}
            />
          </label>
          <label className="flex flex-col w-full" htmlFor="">
            <span className="pb-2">
              possible exchange, attic, storage room ect... square meters
            </span>
            <input
              className="contactInput"
              type="text"
              {...register('extraSquareMeters')}
            />
          </label>
        </div>
        <div className="flex justify-between space-x-5 px-4 w-full">
          <label className="flex flex-col w-full" htmlFor="">
            <span className="pb-2">any bulky items such as a piano</span>
            <input
              className="contactInput bg-white rounded"
              type="text"
              {...register('bulkyItems')}
            />
          </label>
          <div className="flex flex-col  w-full justify-center items-start">
            <h2 className="mb-5">Help for packing?</h2>
            <div className="flex space-x-5">
              <fieldset className="flex space-x-6">
                <div className="flex items-center mb-4">
                  <input
                    {...register('helpForPackingYes')}
                    id="helpForPackingYes"
                    type="radio"
                    name="countries"
                    value="NO"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked
                  />
                  <label
                    htmlFor="helpForPackingYes"
                    className="block ml-2 text-sm font-medium text-gray-900"
                  >
                    no
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    {...register('helpForPackingNo')}
                    id="helpForPackingNo"
                    type="radio"
                    name="countries"
                    value="YES"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                    checked
                  />
                  <label
                    htmlFor="helpForPackingNo"
                    className="block ml-2 text-sm font-medium text-gray-900 "
                  >
                    yes
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoveInformation;
