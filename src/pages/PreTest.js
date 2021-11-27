import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
    Button,
    Card,
    Grid,
    Typography,
    Stepper,
    IconButton,
} from '@mui/material'
import questions from '../JSONFILES/questions.json'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(77,104,164,1) 0%, rgba(28,29,17,1) 100%)',
    },
    myCard: {
        minWidth: '50vw',
        minHeight: '50vh',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        /* backgroundImage:`url(${images})`,
         backgroundSize: 'cover',*/
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)',
        padding: 1,
        margin: 1
    },
    myQuestion: {
        marginTop: 2,
        minWidth: '60vw',
        minHeight: '15vh',
        display: 'flex',
        position: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#837B7C'
    },
    myTitle: {
        fontSize: '2rem',
        opacity: '0.8',
        marginRight: '25vw',
        fontFamily: 'Varela Round',
        color: 'white',
        padding: 1
    },
    myLabels: {
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'white'
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
        minWidth: '60vw',
        minHeight: '5vh',
        margin: 1,
    },
    myIcon: {
        width: '5vw',
        minHeight: '5vh',
    }
}


export default function PreTest() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/assesment/*')
    };
    const handleNext = () => {
        navigate('/main/assesment/post-test/*')
    };

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = questions.length;
    const [score, setScore] = useState(0);
    const handleScore = (isCorrect) => {
        switch (isCorrect) {
            case 'yes':
                setScore((urScore) => urScore + 1)
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                console.log(score)
                break;
            case 'no':
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                break;

            default:
                break;
        }

    }
    if (activeStep === maxSteps) {
        return (
            <Grid container sx={classes.container}>
                <Card sx={classes.myCard}>
                <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} /><Typography>Back</Typography>
                    </IconButton>
                    <Card sx={classes.myQuestion}>
                        <Typography sx={classes.myLabels}>YOUR SCORE IS<br/> {score} / {maxSteps}</Typography>
                    </Card>
                    <Button sx={{textTransform: 'none',
                        borderRadius: 20,
                        minWidth: 'auto',
                        minHeight: '1vh',
                        margin: 2,
                        color:' rgb(37,157,191)',
                background: 'radial-gradient(circle, rgba(37,157,191,1) 0%, rgba(0,50,121,1) 100%)'}}
                 onClick={handleNext}><Typography sx={{color:'#fff'}}>Proceed to Post-Test</Typography> </Button>
                </Card>
            </Grid>)
    }
    const test = questions[activeStep];
    return (
        <PerfectScrollbar>
        <Stepper activeStep={maxSteps} alternativeLabel>
            <Grid container sx={classes.container}>
                <Grid sx={classes.myTitle}>
                    <Typography sx={classes.myTitle}>Pre-Test</Typography>

                </Grid>
                <Card sx={classes.myCard}>
                    <Typography sx={classes.myLabels}>Question #{test.id}</Typography>
                    <Card sx={classes.myQuestion}>
                        <Typography sx={classes.myText}>{test.question}</Typography>
                    </Card>
                    <Button
                        variant="contained"
                        color='btnA'
                        onClick={() => {
                            test.choice1 === test.answer ? handleScore('yes') : handleScore('no')
                        }}
                        sx={classes.myButton}>
                        <Typography sx={classes.myText}>
                            A. {test.choice1}
                        </Typography>
                    </Button>

                    <Button
                        variant="contained"
                        color='btnB'
                        onClick={() => {
                            test.choice2 === test.answer ? handleScore('yes') : handleScore('no')
                        }}
                        sx={classes.myButton}>
                        <Typography sx={classes.myText}>
                            B. {test.choice2}
                        </Typography>
                    </Button>

                    <Button
                        variant="contained"
                        color='btnC'
                        onClick={() => {
                            test.choice3 === test.answer ? handleScore('yes') : handleScore('no')
                        }}
                        sx={classes.myButton}>
                        <Typography sx={classes.myText}>
                            C. {test.choice3}
                        </Typography>
                    </Button>

                    <Button
                        variant="contained"
                        color='btnD'
                        onClick={() => {
                            test.choice4 === test.answer ? handleScore('yes') : handleScore('no')
                        }}
                        sx={classes.myButton}>
                        <Typography sx={classes.myText}>
                            D. {test.choice4}
                        </Typography>
                    </Button>
                </Card>
            </Grid>
        </Stepper >
        </PerfectScrollbar>
    )
}

