import React, { useState } from 'react';
import Address from '../components/address/Address';
import Contacts from '../components/contacts/Contacts';
import MoveInformation from '../components/MoveInformation/MoveInformation';

type Props = {};

const Home = (props: Props) => {
  const [contacts, setContacts] = useState();
  const [address, setAddress] = useState();
  const [moveDetails, setMoveDetails] = useState();
  return (
    <div className=" max-w-5xl mx-auto ">
      <div className="h-24 flex items-center pl-8">
        <h1 className="text-4xl font-semibold">Calculate your moving</h1>
      </div>
      <form className="flex flex-col justify-center items-center text-black pt-1 ">
        <Contacts />
        <Address />
        <MoveInformation />
      </form>
      <button className="heroButton float-right">Get offer</button>
    </div>
  );
};

export default Home;
