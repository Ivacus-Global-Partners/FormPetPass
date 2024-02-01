import React, { useState } from 'react'
import EstablishmentDetails from '../components/EstablishmentDetails';
import PetsData from '../components/PetsData';
import PetsOwner from '../components/PetsOwners';
import LocalHosteleria from '../components/LocalHosteleria';
import Disclaimer from '../components/Disclaimer';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Welcome from '../components/Welcome';

const steps = [
  'Paso 1 (Establecimiento)',
  'Paso 2 (Datos de Mascotas)',
  'Paso 3 (Dueño de Mascotas)',
  'Paso 4 (Hostelería Local)',
  'Paso 5 (Aviso Legal)'
];

const FormPets: React.FC = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Container>
        <Welcome handleOpenModal={handleOpenModal} />

        <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md">
          <DialogTitle>{steps[activeStep]}</DialogTitle>
          <DialogContent>
            {activeStep === 0 && <EstablishmentDetails />}
            {activeStep === 1 && <PetsData />}
            {activeStep === 2 && <PetsOwner />}
            {activeStep === 3 && <LocalHosteleria />}
            {activeStep === 4 && <Disclaimer />}
          </DialogContent>
          <DialogActions>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Atrás
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  )
}

export default FormPets;