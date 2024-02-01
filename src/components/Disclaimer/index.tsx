import React from 'react'
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
        marginTop: '2%',
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

const Disclaimer = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.bienvenida} variant="h6" gutterBottom>
            <b>[Nombre del Restaurante]</b> no se hace responsable de cualquier daño o lesión causada por la mascota al personal, otros clientes, o propiedad del restaurante. Cualquier incidente será responsabilidad del dueño de la mascota.
            </Typography>
        </div>
    )
}

export default Disclaimer