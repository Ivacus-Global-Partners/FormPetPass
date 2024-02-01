import React, { useState } from 'react';
import { Button, Container, Stepper, Step, StepLabel, Typography } from '@mui/material';
import EstablishmentDetails from '../components/EstablishmentDetails';
import PetsData from '../components/PetsData';
import PetsOwner from '../components/PetsOwners';
import LocalHosteleria from '../components/LocalHosteleria';
import Disclaimer from '../components/Disclaimer';

const steps = [
  'Establecimiento',
  'Datos de Mascotas',
  'Dueño de Mascotas',
  'Hostelería Local',
  'Aviso Legal'
];

const FormPetsStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <EstablishmentDetails />;
      case 1:
        return <PetsData />;
      case 2:
        return <PetsOwner />;
      case 3:
        return <LocalHosteleria />;
      case 4:
        return <Disclaimer />;
      default:
        return null;
    }
  };

  return (
    <Container style={{ position: 'relative' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>Todos los pasos completados. ¡Proceso finalizado!</Typography>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div style={{ position: 'fixed', bottom: 0, right: 0, textAlign: 'right', padding: '16px' }}>
              <Button disabled={activeStep === 0} onClick={handleBack} style={{ marginRight: '8px' }}>
                Atrás
              </Button>
              {/* <Button  onClick={() => {}} variant='contained' color='secondary'>
                Previsualizar
              </Button> */}
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default FormPetsStepper;
