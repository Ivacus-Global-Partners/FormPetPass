/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'
import usePetsDataChange from '../../hooks/usePetsDataChange';


const useStyles = makeStyles((theme: Theme) => ({
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
  espacios: {
    margin: '2%'
  }
}))


const PetsData = ({ onChildData }: any) => {
  const classes = useStyles();

  const {
    mascotas,
    documentacion,
    tamanioRaza,
    handleDocumentacionChange,
    handleMascotasChange,
    handleTamanioRazaChange
  } = usePetsDataChange();

  useEffect(() => {
    onChildData({ mascotas, documentacion, tamanioRaza });
  }, [ mascotas, documentacion, tamanioRaza, onChildData])
  

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <Typography variant="h6" style={{ marginTop: '5%' }}><b>2. Documentación y Salud</b></Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleDocumentacionChange} name='vacunas' />} label="La mascota debe tener todas las vacunas al día." />
            <FormControlLabel control={<Checkbox onChange={handleDocumentacionChange} name='seguroResponsabilidad' />} label="La mascota debe el seguro de Responsabilidad al dia." />
          </FormGroup>
        </Grid>
        <Grid container item xs={12} md={12}>
          <Typography variant="h6"><b>3. Tamaño y Raza</b></Typography>
          <FormGroup>
            <Grid item xs={6}>
              <FormControlLabel control={<Checkbox onChange={handleTamanioRazaChange} name='mini' />} label="Petpass Mini con tamaño muy pequeño y peso hasta 4kg. (Chihuahua, Yorkshire, etc.)" />
              <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='s' />} label="Petpass S: Perros con tamaño pequeño y peso hasta 10 kg. (Carlino, Fox Terrier, etc.)" />
              <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='m' />} label="Petpass M: Perros con tamaño mediano y peso hasta 25kg. (Beagle, Bulldog, etc.)" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel control={<Checkbox onChange={handleTamanioRazaChange} name='l' />} label="Petpass L:Perros con tamaño grande y peso hasta 44kg. (Labrador, Pastor Alemán, etc.)" />
              <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='xl' />} label="Petpass XL: Perros con tamaño muy grande y peso más de 44kg. (Mastín, Gran danés, etc.)" />
              <FormControlLabel style={{ marginTop: '2%' }} control={<Checkbox onChange={handleTamanioRazaChange} name='razasNoPPT' />} label="Razas No PPT ( listado razas)" />
            </Grid>
          </FormGroup>
        </Grid>
      </Grid>
    </div>
  )
}

export default PetsData