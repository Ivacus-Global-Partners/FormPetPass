import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPets from '../pages/FormPets';

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<FormPets />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
