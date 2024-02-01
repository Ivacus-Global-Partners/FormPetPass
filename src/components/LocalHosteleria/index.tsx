import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        justifyContent: 'center',
        marginTop: '2%',
        alignItems: 'center',
    },
    espacios: {
        [theme.breakpoints.down('sm')]: {
            margin: '3%'
        },
    }
}))

const LocalHosteleria = ({ onChildData }: any) => {
    const classes = useStyles();

    const [local, setLocal] = useState({
        terraza: false,
        areaEspecial: false,
        todasLasAreas: false,
        maniana: false,
        comida: false,
        tarde: false,
        todoElDia: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
        const { name, checked } = event.target;
        setLocal((prevData) => ({ ...prevData, [name]: checked }));
    };

    useEffect(() => {
        onChildData(local);
    }, [local, onChildData])
    
    

    return (
        <div className={classes.container}>
            <form onSubmit={() => { }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '5%' }}><b>6. Áreas Designadas</b></Typography>
                        <FormGroup>
                            <FormControlLabel className={classes.espacios} control={<Checkbox name='terraza' onChange={handleChange}/>} label="Terraza exterior" />
                            <FormControlLabel className={classes.espacios} control={<Checkbox name='areaEspecial' onChange={handleChange}/>} label="Área especial dentro del restaurante" />
                            <FormControlLabel className={classes.espacios} control={<Checkbox name='todasLasAreas' onChange={handleChange}/>} label="Todas las áreas (con algunas restricciones)" />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '5%' }}><b>7. Horario</b></Typography>
                        <FormGroup>
                            <FormControlLabel className={classes.espacios} control={<Checkbox name='maniana' onChange={handleChange} />} label="Mañana: 6:00 AM - 13:00 PM" />
                            <FormControlLabel className={classes.espacios} control={<Checkbox name='comida' onChange={handleChange} />} label="Comida: 13:00 PM - 17:00 PM" />
                            <FormControlLabel className={classes.espacios} control={<Checkbox name='tarde' onChange={handleChange} />} label="Tarde: 17:00 PM - 20:00" />
                            <FormControlLabel className={classes.espacios} control={<Checkbox name='todoElDia' onChange={handleChange} />} label="Todo el día" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default LocalHosteleria