import React from 'react';

type Props = {
  title: string;
  formNumber: string;
  estimatePrice?: string;
};

const InputHeader = ({ title, formNumber, estimatePrice }: Props) => {
  return (
    <div className="h-16 bg-[#ECF2F6] w-full absolute z-10 top-0 left-0 flex items-center">
      <div className="relative flex justify-center items-center">
        {!estimatePrice && (
          <p className=" text-center text-white font-medium text-3xl absolute top-[-33px] left-[-65px] h-16 w-16  bg-[#548EAB] pt-3">
            {formNumber}
          </p>
        )}
      </div>
      <h2 className="pl-4 font-semibold text-2xl">{title}</h2>
    </div>
  );
};

export default InputHeader;
