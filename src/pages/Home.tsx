import React, { useState } from 'react';
import Address from '../components/address/Address';
import Contacts from '../components/contacts/Contacts';
import MoveInformation from '../components/MoveInformation/MoveInformation';
import { SubmitHandler, useForm } from 'react-hook-form';
import OfferPrice from '../components/offerPrice/OfferPrice';
import { getPricing, getDistance } from '../lib/api';
import { Inputs, OfferDetails } from '../../typing';
import { v4 } from 'uuid';
import { useJsApiLoader } from '@react-google-maps/api';
import Loader from '../components/Loader/Loader';
const Home = () => {
  const [offer, setOffer] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [offerDetail, setOfferDetails] = useState<OfferDetails>();
  const [totalDistance, setTotalDistance] = useState<string>('');
  const [offerNumber, setOfferNumber] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_CLIENT_KEY!,
    libraries: ['places'],
  });
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      startAddress: '',
      finalAddress: '',
      squareMeters: '',
      extraSquareMeters: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    //get distance between two destinations
    setIsLoading(true);
    const distance = await getDistance(data.startAddress, data.finalAddress);

    setTotalDistance(distance.distance!);
    // convert bulkyItems to boolean
    const bulkyItems = !!data.bulkyItems;
    // get price for the moving
    const res = await getPricing(
      distance.distance!,
      data.squareMeters,
      data.extraSquareMeters,
      bulkyItems
    );

    if (res.error) {
      setError(res.error.message);
      setIsLoading(false);
      return;
    }
    // save offer details

    setOfferDetails({
      ...data,
      distance: distance.distance!,
      offer: res.offer,
      offerNumber: offerNumber,
    });
    setIsLoading(false);
    setOffer(res.rate);
    setOfferNumber(v4());
  };

  const cleanFormHandler = () => {
    //TOdo: save offer details to context or a state management
    reset();
    setOffer('');
    setTotalDistance('');
    setOfferNumber('');
  };

  if (error) {
    return (
      <div className="text-red-500 h-screen text-2xl flex justify-center items-center">
        {error}
      </div>
    );
  }
  if (!isLoaded || isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

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
        <Contacts
          register={register}
          estimatePrice={offer}
          inputError={errors}
        />
        <Address
          register={register}
          estimatePrice={offer}
          inputError={errors}
        />
        <MoveInformation
          register={register}
          estimatePrice={offer}
          inputError={errors}
        />
        {!offer && (
          <button className="heroButton float-right">Get offer</button>
        )}
        {offer && (
          <OfferPrice
            estimatePrice={offer}
            totalDistance={totalDistance}
            onClick={cleanFormHandler}
          />
        )}
      </form>
    </div>
  );
};

export default Home;
