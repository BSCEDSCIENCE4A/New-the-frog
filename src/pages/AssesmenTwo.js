import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
    Button,
    Card,
    Grid,
    IconButton,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#3f3f3f'
    },
    myCard: {
        minWidth: '60vw',
        minHeight: '60vh',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
       /* backgroundImage:`url(${images})`,
        backgroundSize: 'cover',*/
        padding: 3,
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)"
    },
    myQuestion: {
        padding: 2,
        minWidth: '50vw',
        minHeight: '15vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)"
    },
    myLabels: {
        fontSize: '2rem',
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'black'
    },
    myText: {
        fontSize: '1.2rem',
        opacity: '0.8',
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'white',
        padding: 1
    },
    myButton: {
        textTransform: 'none',
        borderRadius: 20,
        minWidth: '50vw',
        minHeight: '5vh',
        margin: 2,
    }
}
export default function AssesmenTwo() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/*')
    };
    const handleNext = () => {
        navigate('/main/assesment/post-Test/*')
        
  
    };

    return (
        <Grid container sx={classes.container}>

            <Card sx={classes.myCard}>
            <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} /><Typography>Back</Typography>
                    </IconButton>
                <Card sx={classes.myQuestion}>
                    <Typography sx={classes.myLabels}>Assesment</Typography>
                    <Button
                        variant="contained"
                        color='btnA'
                        onClick={handleNext}
                        sx={{...classes.myButton,background:'radial-gradient(circle, rgba(147,92,69,1) 9%, rgba(70,14,14,1) 100%)'}}>
                        <Typography sx={classes.myText}>
                            Post-Test
                        </Typography>
                    </Button>
                   
                </Card>
            </Card>
        </Grid>
    )
}
