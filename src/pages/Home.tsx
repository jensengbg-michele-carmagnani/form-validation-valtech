import React from 'react';
import Address from '../components/address/Address';
import Contacts from '../components/contacts/Contacts';
import MoveInformation from '../components/MoveInformation/MoveInformation';
import { SubmitHandler, useForm } from 'react-hook-form';
import OfferPrice from '../components/offerPrice/OfferPrice';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  startAddress: string;
  squareMeters: string;
  finalAddress: string;
  helpForPackingYes: string;
  helpForPackingNo: string;
};

const Home = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetch(
      `https://moveitcaseapi.azurewebsites.net/api/Rate?distance=${data.startAddress}&ordinaryVolume=${data.squareMeters}&piano=${data.helpForPackingYes}`
    );
  };
  return (
    <div className=" max-w-5xl mx-auto h-screen ">
      <div className="h-24 flex items-center pl-8">
        <h1 className="text-4xl font-semibold">Calculate your moving</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center text-black 
      pt-1 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Contacts register={register} />
        <Address register={register} />
        <MoveInformation register={register} />
        {/* <button className="heroButton float-right">Get offer</button> */}
        <OfferPrice estimatePrice="10" totalDistance="25" />
      </form>
    </div>
  );
};

export default Home;
