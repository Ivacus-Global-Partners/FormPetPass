import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPetsPopUp from '../pages/FormPetsPopUp';
import FormPetsStepper from '../pages/FormPetsStepper';

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<FormPetsPopUp />} />
                <Route path="/stepper" element={<FormPetsStepper />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
