import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    bienvenida: {
        textAlign: 'justify',
        marginBottom: '2%',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '15%',
        },
    },
}))

const Disclaimer = ({ name }: { name: string }) => {

    console.log('name>>>',name);

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.bienvenida} variant="h6" gutterBottom>
                <b>{`${name ? name : '[Nombre del Restaurante]'}`}</b> no se hace responsable de cualquier daño o lesión causada por la mascota al personal, otros clientes, o propiedad del restaurante. Cualquier incidente será responsabilidad del dueño de la mascota.
            </Typography>
        </div>
    )
}

export default Disclaimer