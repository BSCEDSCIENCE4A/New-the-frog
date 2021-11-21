import React from 'react'

import {
    Button,
    Card,
    Grid,
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
        // background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(77,104,164,1) 0%, rgba(28,29,17,1) 100%)',
    },
    myCard: {
        minWidth: '60vw',
        minHeight: '60vh',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        /*backgroundImage:`url(${images})`,
        backgroundSize: 'cover',*/
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)",
        padding: 3
    },
    myQuestion: {
        padding: 2,
        minWidth: '50vw',
        minHeight: '15vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)",

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
export default function Main() {
    const navigate = useNavigate();

    const handleNext = (id) => {
        switch (id) {
            case 'toExplore':
                navigate('/main/explore/')
                break;

            case 'toAssesment':
                navigate('/main/assesment/')
                break;

            case 'toModel':
                navigate('/main/model/*')
                break;

            default:
                navigate('/main/*')
                break;
        }
    };

    return (
        <Grid container sx={classes.container}>

            <Card sx={classes.myCard}>
                <Card sx={classes.myQuestion}>
                    <Typography sx={classes.myLabels}>The Frog</Typography>
                    <Button
                        variant="contained"
                        color='btnA'
                        onClick={() => handleNext('toExplore')}
                        sx={{ ...classes.myButton, background: ' radial-gradient(circle, rgba(147,69,140,1) 9%, rgba(70,14,14,1) 100%)' }}>
                        <Typography sx={classes.myText}>
                            Explore
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        color='btnA'
                        onClick={() => handleNext('toModel')}
                        sx={{ ...classes.myButton, background: 'radial-gradient(circle, rgba(41,119,135,1) 0%, rgba(5,20,79,1) 100%)' }}>
                        <Typography sx={classes.myText}>
                            Model
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        color='btnA'
                        onClick={() => handleNext('toAssesment')}
                        sx={{ ...classes.myButton, background: 'radial-gradient(circle, rgba(25,158,27,1) 9%, rgba(18,45,16,1) 100%)' }}>
                        <Typography sx={classes.myText}>
                            Assesment
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        color='btn'
                        onClick={() => handleNext('toAssesment')}
                        sx={{ ...classes.myButton, background:'radial-gradient(circle, rgba(147,92,69,1) 9%, rgba(70,14,14,1) 100%)'}}>
                        <Typography sx={classes.myText}>
                            About
                        </Typography>
                    </Button>
                </Card>
            </Card>
        </Grid>
    )
}
