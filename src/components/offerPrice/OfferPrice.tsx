import React from 'react';
import HeaderForm from '../layout/headerFrom/headerForm';
type Props = {
  estimatePrice: string;
  totalDistance: string;
};

const OfferPrice = ({ estimatePrice, totalDistance }: Props) => {
  return (
    <div className="bg-[#D3E4EC] w-full relative pt-20 pb-5 px-5">
      <HeaderForm title="Price offer" formNumber="3" />
      <h2>Estimated price: {estimatePrice} kr before tax</h2>
      <h2>Total distance between flats: {totalDistance} km</h2>
      <p>The offer is valid 90 from now </p>
      <p>Do you have any question contact us info@moveIt.com</p>
      <p>You wanna see the offer click here </p>
    </div>
  );
};

export default OfferPrice;
