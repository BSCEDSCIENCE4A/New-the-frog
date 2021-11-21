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
import CountDown from '../utils/countdown';

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
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)',
        padding: 1,
        margin: 1
    },
    myQuestion: {
        marginTop: 1,
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
        minWidth: '70vw',
        minHeight: '5vh',
        margin: 1,
    },
    myIcon: {
        width: '5vw',
        minHeight: '5vh',
    }
}


export default function PostTest() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/assesment/*')
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
                        <Typography sx={classes.myLabels}>YOUR SCORE IS {score} / {maxSteps}</Typography>
                    </Card>
                </Card>
            </Grid>)
    }
    const test = questions[activeStep];
    return (
        <Stepper activeStep={maxSteps} alternativeLabel>
            <Grid container sx={classes.container}>
                <Grid sx={classes.myTitle}>
                    <Typography sx={classes.myTitle}>Post-Test</Typography>

                </Grid>
                <CountDown minutes={45} />
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
    )
}

