import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LogoPet from '../../assets/Img/logo_petpass_web.png'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
    Titulo: {
        textAlign: 'left',
    },
    logo: {
        width: '30%',
        height: '30%',
        display: 'flex',
        marginBottom: '2%'
    },
    bienvenida: {
        textAlign: 'justify',
        marginBottom: '2%',
    },
    container: {
        justifyContent: 'center',
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
}))

const EstablishmentDetails = () => {

    const fechaActual = new Date();
    const formatoFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', formatoFecha);

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img src={LogoPet} alt="Logo Pet" className={classes.logo} />
            <h2 className={classes.Titulo}>Nombre del restaurante/Bar</h2>
            <Typography style={{ textAlign: 'left' }} variant='h6' >Direccion del establecimiento</Typography>
            <Typography style={{ textAlign: 'left' }} variant='h6' >Fecha actual: {fechaFormateada}</Typography>
            <Typography style={{ textAlign: 'left' }} variant='h6' >email del establecimiento</Typography>
            <Typography style={{ textAlign: 'left' }} variant='h6' >Telefono del establecimiento</Typography>
            <Typography className={classes.bienvenida} variant="h6" gutterBottom>
                En <b>[Nombre de restaurante]</b>, entendemos que las mascotas son parte de su familia. Estamos encantados de ofrecer
                opciones para que nuestros clientes puedan disfrutar de una comida acompañados de sus fieles amigos. Por favor,
                lea y complete el siguiente formulario para entender y aceptar nuestr política de mascotas.
            </Typography>
        </div>
    )
}

export default EstablishmentDetails;
