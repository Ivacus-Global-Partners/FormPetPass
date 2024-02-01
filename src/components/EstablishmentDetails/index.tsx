import { Theme, Typography, TextField, Grid, FormControl, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EventIcon from '@mui/icons-material/Event';

import React, { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    bienvenida: {
        textAlign: 'justify',
        marginBottom: '2%',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        [theme.breakpoints.down(850)]: {
            paddingRight: '5%',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            paddingLeft: '2',
            paddingRight: '2',
        },
    },
}));

const EstablishmentDetails = () => {

    const classes = useStyles();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    console.log("Nombre: ", formData.name);
    console.log("Email: ", formData.email);
    console.log("Telefono: ", formData.phone);
    console.log("Direccion: ", formData.address);
    console.log("Fecha: ", formData.date);


    return (
        <div className={classes.container}>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <TextField
                        label="Nombre del restaurante/Bar"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='name'
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField
                        label="Direccion del establecimiento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='address'
                    />
                </Grid>
                <Grid item md={4}>
                    <FormControl fullWidth margin="normal">
                        <TextField
                            label="Fecha de Implementación"
                            type="date"
                            onChange={handleChange}
                            variant="outlined"
                            name='date'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EventIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4}>
                    <TextField
                        label="Telefono del establecimiento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='phone'
                    />
                </Grid>
                <Grid item md={4}>
                    <TextField
                        label="Email del establecimiento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='email'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.bienvenida} variant="body1" gutterBottom>
                        En  <b>{(formData.name === '') ? 'Nombre restaurante/Bar' : formData.name}</b> entendemos que las mascotas son parte de su familia. Estamos encantados de ofrecer opciones para que nuestros clientes puedan disfrutar de una comida acompañados de sus fieles amigos. Por favor, lea y complete el siguiente formulario para entender y aceptar nuestra política de mascotas.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default EstablishmentDetails;