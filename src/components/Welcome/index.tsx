import React from 'react'
import { Button, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LogoPet from '../../assets/Img/logo_petpass_web.png'

const useStyles = makeStyles((theme: Theme) => ({
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
        paddingTop: '15%',
        [theme.breakpoints.down(850)]: {
            paddingRight: '5%',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            paddingLeft: '2',
            paddingRight: '2',
        },
    },
    centrado: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const Welcome = ({ handleOpenModal }: { handleOpenModal: React.MouseEventHandler<HTMLButtonElement> }) => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.centrado}>
                    <img src={LogoPet} alt="Logo Pet" className={classes.logo} />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ textAlign: 'center'}}>
                    <Typography variant='h3'>Nombre del restaurante/Bar</Typography>
                        <Button variant="contained" color="primary" onClick={handleOpenModal}>
                            Iniciar Stepper
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Welcome