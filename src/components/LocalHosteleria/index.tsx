import React from 'react'
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

const LocalHosteleria = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <form onSubmit={() => { }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '5%' }}><b>6. Áreas Designadas</b></Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Terraza exterior" />
                            <FormControlLabel control={<Checkbox />} label="Área especial dentro del restaurante" />
                            <FormControlLabel control={<Checkbox />} label="Todas las áreas (con algunas restricciones)" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '5%' }}><b>7. Horario</b></Typography>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Mañana: 6:00 AM - 13:00 PM" />
                            <FormControlLabel control={<Checkbox />} label="Comida: 13:00 PM - 17:00 PM" />
                            <FormControlLabel control={<Checkbox />} label="Tarde: 17:00 PM - 20:00" />
                            <FormControlLabel control={<Checkbox />} label="Todo el día" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default LocalHosteleria