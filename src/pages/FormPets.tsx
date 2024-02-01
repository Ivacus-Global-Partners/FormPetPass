import React from 'react'
import EstablishmentDetails from '../components/EstablishmentDetails';
import PetsData from '../components/PetsData';
import PetsOwner from '../components/PetsOwners';
import LocalHosteleria from '../components/LocalHosteleria';
import Disclaimer from '../components/Disclaimer';

const FormPets: React.FC = () => {
  return (
    <>
      <EstablishmentDetails />
      <PetsData />
      <PetsOwner />
      <LocalHosteleria />
      <Disclaimer />
    </>
  )
}

export default FormPets;