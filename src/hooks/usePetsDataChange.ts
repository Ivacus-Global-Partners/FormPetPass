import { useState } from "react";

export default function usePetsDataChange() {

    const [mascotas, setMascotas] = useState({
        perros: false,
        gatos: false,
        otros: false,
        otraMascota: ''
    });

    const [documentacion, setDocumentacion] = useState({
        vacunas: false,
        seguroResponsabilidad: false
    });

    const [tamanioRaza, setTamanioRaza] = useState({
        mini: false,
        s: false,
        m: false,
        l: false,
        xl: false,
        razasNoPPT: false
    });

    const handleMascotasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;
    
        setMascotas((prevMascotas) => ({
          ...prevMascotas,
          [name]: type === 'checkbox' ? event.target.checked : value
        }));
      };
    
      const handleDocumentacionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocumentacion((prevDocumentacion) => ({
          ...prevDocumentacion,
          [event.target.name]: event.target.checked
        }));
      };
    
      const handleTamanioRazaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTamanioRaza((prevTamanioRaza) => ({
          ...prevTamanioRaza,
          [event.target.name]: event.target.checked
        }));
      };

    return {
        mascotas,
        documentacion,
        tamanioRaza,
        handleMascotasChange,
        handleDocumentacionChange,
        handleTamanioRazaChange
    }
}