import { useState } from "react";

export default function usePetsOwnerDataChange() {

    const [responsabilidad, setResponsabilidad] = useState({
        conducta: false,
        limpiar: false,
        areas: false
    });

    const [requisitos, setRequisitos] = useState({
        correa: false,
        agresividad: false
    });

    const handleResponsabilidadChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const { name } = event.target;

        setResponsabilidad((prevResponsabilidad) => ({
            ...prevResponsabilidad,
            [name]: checked
        }));
    };

    const handleRequisitosChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const { name } = event.target;

        setRequisitos((prevRequisitos) => ({
            ...prevRequisitos,
            [name]: checked
        }));
    };

    return {
        responsabilidad,
        requisitos,
        handleResponsabilidadChange,
        handleRequisitosChange
    }
}