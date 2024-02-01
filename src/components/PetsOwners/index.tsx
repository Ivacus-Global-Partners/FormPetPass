import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        justifyContent: 'center',
        marginTop: '2%',
        alignItems: 'center',
        [theme.breakpoints.down(850)]: {
            paddingRight: '5%',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            paddingLeft: '2',
            paddingRight: '2',
        },
    },
    espacios: {
        margin: '2%'
    }
}))

const PetsOwner = () => {
    const classes = useStyles();

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

    console.log("responsabilidad", responsabilidad);    
    console.log("requisitos", requisitos);
    

    return (
        <div className={classes.container}>
            <form onSubmit={() => { }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '5%' }}><b>4. Responsabilidad el Dueño</b></Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={handleResponsabilidadChange} name='conducta' />} label="El dueño entiende que es completamente responsable de la conducta de su mascota mientras esté en las instalaciones de [Nombre del Restaurante]." />
                            <FormControlLabel control={<Checkbox onChange={handleResponsabilidadChange} name='limpiar' />} label="El dueño  acepto limpiar cualquier desecho que mi mascota genere." />
                            <FormControlLabel control={<Checkbox onChange={handleResponsabilidadChange} name='areas' />} label="El dueño  acepto  mantener a mi mascota en las áreas designadas y seguir las instrucciones del personal del restaurante." />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '5%' }}><b>5. Requisitos de Comportamiento</b></Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={handleRequisitosChange} name='correa' />} label="La mascota debe estar en todo momento con correa y controlada." />
                            <FormControlLabel control={<Checkbox onChange={handleRequisitosChange} name='agresividad' />} label="La mascota no debe mostrar signos de agresividad hacia otras mascotas o clientes." />
                        </FormGroup>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default PetsOwner