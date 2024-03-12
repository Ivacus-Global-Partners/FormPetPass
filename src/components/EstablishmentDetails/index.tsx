import { Theme, Typography, TextField, Grid, FormControl, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EventIcon from '@mui/icons-material/Event';

import React, { useEffect, useState } from 'react';

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

const EstablishmentDetails = ({ onChildData, setName }: { onChildData: any, setName: any }) => {

    const classes = useStyles();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        CIF: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    useEffect(() => {
        onChildData(formData);
    }, [formData, onChildData])
    
    useEffect(() => {
        setName(formData.name);
    }, [formData, setName])

    return (
        <div className={classes.container}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Nombre del restaurante/Bar"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='name'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Direccion del establecimiento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='address'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
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
                <Grid item xs={12} md={3}>
                    <TextField
                        label="Telefono del establecimiento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='phone'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField
                        label="Email del establecimiento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='email'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField
                        label="CIF/NUIF:"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleChange}
                        name='CIF:'
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