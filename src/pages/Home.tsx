import React, { SetStateAction, useState } from 'react';
import Address from '../components/address/Address';
import Contacts from '../components/contacts/Contacts';
import MoveInformation from '../components/MoveInformation/MoveInformation';
import { SubmitHandler, useForm } from 'react-hook-form';
import OfferPrice from '../components/offerPrice/OfferPrice';
import { getPricing, getDistance } from '../lib/api';
import { Inputs } from '../../typing';
import { v4 as uuidv4, v4 } from 'uuid';

const Home = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [offer, setOffer] = useState<string>('');
  const [distance, setDistance] = useState<string>('10');
  const [offerNumber, setOfferNumber] = useState<string>('');
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const realDistance = await getDistance();
    setDistance(realDistance);
    const bulkyItems = !!data.bulkyItems;

    const res = await getPricing(
      distance,
      data.squareMeters,
      data.extraSquareMeters,
      bulkyItems
    );
    setOffer(res.rate);
    const offerNumber = v4();
    console.log(offerNumber);
    setOfferNumber(offerNumber);
  };
  return (
    <div className=" max-w-5xl mx-auto  mb-20">
      <div className="h-24 flex items-center pl-8">
        <h1 className="text-4xl font-semibold">
          {!offerNumber
            ? `Calculate the cost of your moving`
            : `Quotation proposal N ${offerNumber.slice(0, 8)}`}
        </h1>
      </div>
      <form
        className="flex flex-col justify-center items-center text-black 
      pt-1 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Contacts register={register} estimatePrice={offer} />
        <Address register={register} estimatePrice={offer} />
        <MoveInformation register={register} estimatePrice={offer} />
        {!offer && (
          <button className="heroButton float-right">Get offer</button>
        )}
        {offer && <OfferPrice estimatePrice={offer} totalDistance={distance} />}
      </form>
    </div>
  );
};

export default Home;
