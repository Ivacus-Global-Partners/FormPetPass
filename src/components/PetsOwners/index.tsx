import { Checkbox, FormControlLabel, FormGroup, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import usePetsOwnerDataChange from '../../hooks/usePetsOwnerDataChange';
import { useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        justifyContent: 'center',
        marginTop: '2%',
        alignItems: 'center',
    },
    espacios: {
        [theme.breakpoints.down('sm')]: {
            margin: '6%'
        },
    }
}))

const PetsOwner = ({ onChildData }: any) => {
    const classes = useStyles();

    const { 
        responsabilidad, 
        requisitos, 
        handleRequisitosChange,
        handleResponsabilidadChange 
    } = usePetsOwnerDataChange();  

    useEffect(() => {
        onChildData({ responsabilidad, requisitos });
    }, [ responsabilidad, requisitos, onChildData])
    

    return (
        <div className={classes.container}>
            <form onSubmit={() => { }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '3%' }}><b>4. Responsabilidad el Dueño</b></Typography>
                        <FormGroup>
                            <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleResponsabilidadChange} name='conducta' />} label="El dueño entiende que es completamente responsable de la conducta de su mascota mientras esté en las instalaciones de [Nombre del Restaurante]." />
                            <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleResponsabilidadChange} name='limpiar' />} label="El dueño  acepto limpiar cualquier desecho que mi mascota genere." />
                            <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleResponsabilidadChange} name='areas' />} label="El dueño  acepto  mantener a mi mascota en las áreas designadas y seguir las instrucciones del personal del restaurante." />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ marginTop: '3%' }}><b>5. Requisitos de Comportamiento</b></Typography>
                        <FormGroup>
                            <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleRequisitosChange} name='correa' />} label="La mascota debe estar en todo momento con correa y controlada." />
                            <FormControlLabel className={classes.espacios} control={<Checkbox onChange={handleRequisitosChange} name='agresividad' />} label="La mascota no debe mostrar signos de agresividad hacia otras mascotas o clientes." />
                        </FormGroup>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default PetsOwner