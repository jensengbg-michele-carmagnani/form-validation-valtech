import React from 'react';
import { Link } from 'react-router-dom';
import HeaderForm from '../layout/headerFrom/headerForm';
type Props = {
  estimatePrice: string;
  totalDistance: string;
  onClick: () => void;
};

const OfferPrice = ({ estimatePrice, totalDistance, onClick }: Props) => {
  return (
    <div className="bg-[#D3E4EC] w-full relative pt-20 pb-5 px-5 ">
      <HeaderForm
        estimatePrice={estimatePrice}
        title="Price offer"
        formNumber="3"
      />
      <div className="flex justify-between">
        <div>
          <div className="space-y-2 mb-4">
            <h2 className="text-2xl font-semibold ">
              Estimated price: {estimatePrice} kr before tax
            </h2>
            <h2 className="text-2xl font-semibold ">
              Total distance between flats: {totalDistance}
            </h2>
          </div>
          <div className="uppercase text-sm">
            <p>The offer is valid 90 from now </p>
            <p className="mb-3">
              Do you have any question contact us{' '}
              <span className="text-[#548EAB] underline">info@moveIt.se</span>
            </p>
            <p>
              If you wanna see the offer click{' '}
              <Link to={''}>
                <span className="text-[#548EAB] underline">here</span>
              </Link>{' '}
            </p>
          </div>
        </div>

        <button className="heroButton h-16 self-end" onClick={onClick}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default OfferPrice;
