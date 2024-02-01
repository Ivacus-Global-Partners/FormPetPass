import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useEffect } from 'react'
import usePetsDataChange from '../../hooks/usePetsDataChange';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
  },
  espacios: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '8%'
    },
  }
}))

const PetsData = ({ onChildData }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
  }, [mascotas, documentacion, tamanioRaza, onChildData])


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
              style={{ width: '75%' }}
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
            <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleDocumentacionChange} name='vacunas' />} label="La mascota debe tener todas las vacunas al día." />
            <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleDocumentacionChange} name='seguroResponsabilidad' />} label="La mascota debe el seguro de Responsabilidad al dia." />
          </FormGroup>
        </Grid>
        <Grid container item xs={12} md={12}>
          <Typography variant="h6"><b>3. Tamaño y Raza</b></Typography>
          <FormGroup>
            <Grid item xs={12} md={6}>
              <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleTamanioRazaChange} name='mini' />} label="Petpass Mini con tamaño muy pequeño y peso hasta 4kg. (Chihuahua, Yorkshire, etc.)" />
              <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleTamanioRazaChange} name='s' />} label="Petpass S: Perros con tamaño pequeño y peso hasta 10 kg. (Carlino, Fox Terrier, etc.)" />
              <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleTamanioRazaChange} name='m' />} label="Petpass M: Perros con tamaño mediano y peso hasta 25kg. (Beagle, Bulldog, etc.)" />
              {isMobile && (
                <>
                  <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleTamanioRazaChange} name='l' />} label="Petpass L:Perros con tamaño grande y peso hasta 44kg. (Labrador, Pastor Alemán, etc.)" />
                  <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleTamanioRazaChange} name='xl' />} label="Petpass XL: Perros con tamaño muy grande y peso más de 44kg. (Mastín, Gran danés, etc.)" />
                  <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleTamanioRazaChange} name='razasNoPPT' />} label="Razas No PPT ( listado razas)" />
                </>
              )}
            </Grid>
            {!isMobile && (
              <Grid item xs={12} md={6}>
                <FormControlLabel control={<Checkbox onChange={handleTamanioRazaChange} name='l' />} label="Petpass L:Perros con tamaño grande y peso hasta 44kg. (Labrador, Pastor Alemán, etc.)" />
                <FormControlLabel control={<Checkbox onChange={handleTamanioRazaChange} name='xl' />} label="Petpass XL: Perros con tamaño muy grande y peso más de 44kg. (Mastín, Gran danés, etc.)" />
                <FormControlLabel control={<Checkbox onChange={handleTamanioRazaChange} name='razasNoPPT' />} label="Razas No PPT ( listado razas)" />
              </Grid>
            )}
          </FormGroup>
        </Grid>
      </Grid>
    </div>
  )
}

export default PetsData