import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'


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

const PetsData = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" style={{ marginTop: '5%' }}>1. Tipo de Mascotas Permitidas</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Perros" />
            <FormControlLabel control={<Checkbox />} label="Gatos" />
            <FormControlLabel control={<Checkbox />} label="Otros" />
            <TextField
              style={{ width: '50%', marginTop: '3%' }}
              label="Especificar otra mascota"
              variant="outlined"
              margin="normal"
            ></TextField>
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" style={{ marginTop: '5%' }}>2. Documentación y Salud</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="La mascota debe tener todas las vacunas al día." />
            <FormControlLabel control={<Checkbox />} label="La mascota debe el seguro de Responsabilidad al dia." />
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" style={{ marginTop: '5%' }}>3. Tamaño y Raza</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Petpass Mini con tamaño muy pequeño y peso hasta 4kg. (Chihuahua, Yorkshire, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox />} label="Petpass S: Perros con tamaño pequeño y peso hasta 10 kg. (Carlino, Fox Terrier, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox />} label="Petpass M: Perros con tamaño mediano y peso hasta 25kg. (Beagle, Bulldog, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox />} label="Petpass L:Perros con tamaño grande y peso hasta 44kg. (Labrador, Pastor Alemán, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox />} label="Petpass XL: Perros con tamaño muy grande y peso más de 44kg. (Mastín, Gran danés, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox />} label="Razas No PPT ( listado razas)" />
          </FormGroup>
        </Grid>
      </Grid>
    </div>
  )
}

export default PetsData