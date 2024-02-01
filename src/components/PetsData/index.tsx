/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'


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

const PetsData: React.FC = () => {
  const classes = useStyles();

  const [mascotas, setMascotas] = useState({
    perros: false,
    gatos: false,
    otros: false,
    otraMascota: ''
  });

  const [documentacion, setDocumentacion] = useState({
    vacunas: false,
    seguroResponsabilidad: false
  });

  const [tamanioRaza, setTamanioRaza] = useState({
    mini: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    razasNoPPT: false
  });

  const handleMascotasChange = (event: any) => {
    const { name, value, checked, type } = event.target;

    setMascotas((prevMascotas) => ({
      ...prevMascotas,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDocumentacionChange = (event: any) => {
    setDocumentacion((prevDocumentacion) => ({
      ...prevDocumentacion,
      [event.target.name]: event.target.checked
    }));
  };

  const handleTamanioRazaChange = (event: any) => {
    setTamanioRaza((prevTamanioRaza) => ({
      ...prevTamanioRaza,
      [event.target.name]: event.target.checked
    }));
  };

  const handleSubmit = () => {
    console.log('Tipo de Mascotas Permitidas:', mascotas);
    console.log('Documentación y Salud:', documentacion);
    console.log('Tamaño y Raza:', tamanioRaza);
  };

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" style={{ marginTop: '5%' }}><b>1. Tipo de Mascotas Permitidas</b></Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox name="perros" onChange={handleMascotasChange} />} label="Perros" />
            <FormControlLabel control={<Checkbox name="gatos" onChange={handleMascotasChange} />} label="Gatos" />
            <FormControlLabel control={<Checkbox name="otros" onChange={handleMascotasChange} />} label="Otros" />
            <TextField
              style={{ width: '50%', marginTop: '3%' }}
              label="Especificar otra mascota"
              variant="outlined"
              margin="normal"
              name='otraMascota'
              onChange={handleMascotasChange}
            ></TextField>
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" style={{ marginTop: '5%' }}><b>2. Documentación y Salud</b></Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleDocumentacionChange} name='vacunas'/>} label="La mascota debe tener todas las vacunas al día." />
            <FormControlLabel control={<Checkbox onChange={handleDocumentacionChange} name='seguroResponsabilidad'/>} label="La mascota debe el seguro de Responsabilidad al dia." />
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" style={{ marginTop: '5%' }}><b>3. Tamaño y Raza</b></Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleTamanioRazaChange} name='mini'/>} label="Petpass Mini con tamaño muy pequeño y peso hasta 4kg. (Chihuahua, Yorkshire, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='s' />} label="Petpass S: Perros con tamaño pequeño y peso hasta 10 kg. (Carlino, Fox Terrier, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='m' />} label="Petpass M: Perros con tamaño mediano y peso hasta 25kg. (Beagle, Bulldog, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='l' />} label="Petpass L:Perros con tamaño grande y peso hasta 44kg. (Labrador, Pastor Alemán, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='xl' />} label="Petpass XL: Perros con tamaño muy grande y peso más de 44kg. (Mastín, Gran danés, etc.)" />
            <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='razasNoPPT' />} label="Razas No PPT ( listado razas)" />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <button onClick={handleSubmit}>Enviar Formulario</button>
        </Grid>
      </Grid>
    </div>
  )
}

export default PetsData