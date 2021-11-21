import React from 'react'
import {
    Grid,
    Typography,
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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
        maxWidth: '90vw',
        minHeight: '100vh',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #F7F61B, #168820)',
        padding: 3,
        "@media (max-width: 600px)": {
            fontSize: '1.5rem',
            padding: 1
        },
    },
    myQuestion: {
        minWidth: '30vw',
        minHeight: '100vh',
        display: 'flex',
        position: 'left',
        padding: 3,
        flexDirection: 'column',
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)"
    },
    myTitle: {
        fontSize: '1.8rem',
        opacity: '0.8',
        fontFamily: 'Varela Round',
        color: 'black',
        marginLeft: 5,
        padding: 1,
        "@media (max-width: 600px)": {
            marginLeft: 0,
            textAlign: 'center',
            fontSize: '1.5rem',
        },
    },

    myLabels: {
        fontSize: '1.5rem',
        opacity: '0.8',
        marginLeft: 5,
        fontWeight: 'bold',
        fontFamily: 'Varela Round',
        color: 'black',
        padding: 1,
        "@media (max-width: 600px)": {
            marginLeft: 0,
            fontSize: '1.2rem',
        },
    },
    myTimeText: {
        fontSize: '1.2rem',
        fontFamily: 'Varela Round',
        color: 'black',
        "@media (max-width: 600px)": {
            fontSize: '1rem'
        },
    },
    myImg: {
        display: 'flex',
        padding: 10,
        "@media (max-width: 600px)": {
            padding: 2,
        },
    },
    myText: {
        fontSize: '1.2rem',
        paddingTop: 2,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        fontFamily: 'Varela Round',
        color: 'black',
        "@media (max-width: 600px)": {
            marginLeft: 0,
            fontSize: '1rem',
            paddingTop: 0,
            paddingLeft: 2,
            paddingBottom: 0,
            paddingRight: 2,
        },
    },
    myIcon: {
        width: '5vw',
        minHeight: '5vh',
    }
}


export default function SIMILARITIES_ANATOMY() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>E. <u>SIMILARITIES AND DISTINCTION OF HUMAN AND FROG ANATOMY</u></Typography>
                    <TableContainer component={Grid} >
                        <Table aria-label="simple table">
                            <TableHead sx={{ 'td,th': { border: 3 } }}>
                                <TableRow>
                                    <TableCell sx={classes.myLabels} colSpan={3}>1.Humans and amphibians have lots of similarities.</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>LUNGS</TableCell>
                                    <TableCell align="center" sx={classes.myText} >We both have 2 lungs used for breathing.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>DIGESTIVE SYSTEM</TableCell>
                                    <TableCell align="center" sx={classes.myText} >We both have a mouth, esophagus, stomach, pancreas, liver, gall bladder, small intestine, and large intestine.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>CIRCULATORY SYSTEM</TableCell>
                                    <TableCell align="center" sx={classes.myText} >We both have arteries, capillaries, veins, blood, and a heart</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>BRAINS</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Although we both have brains, ours is more complex.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>SKELETONS</TableCell>
                                    <TableCell align="center" sx={classes.myText} >We both have a skeleton that provides a framework for our bodies, protects our internal organs, and allow us to move.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>MUSCLES AND CONNECTIVE TISSUE</TableCell>
                                    <TableCell align="center" sx={classes.myText} >We both have these tissues that hold our skeletons together.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />
                    <TableContainer component={Grid} >
                        <Table aria-label="simple table">
                            <TableHead sx={{ 'td,th': { border: 3, } }}>
                                <TableRow>
                                    <TableCell sx={classes.myLabels} colSpan={3}>2.Although we have many of the same organs and systems, they work differently in amphibians than they do in humans.</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>BODY CONFIGURATION</TableCell>
                                    <TableCell align="center" sx={classes.myText} >A frog’s heart, lungs, and digestive systems are all found in one single hollow space.  Our internal organs are housed in three distinct cavities: chest, abdomen, and pelvis.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>RESPIRATORY SYSTEM</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Frogs breathe through their skin.  Known as “cutaneous respiration”, this process allows oxygen to pass through the skin and directly into the bloodstream.  Frogs also have neither ribs nor diaphragms; body parts that help humans breathe.  And, their chest muscles are not used for breathing.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>REPRODUCTIVE SYSTEM</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Although both humans and frogs produce eggs, frog eggs are fertilized externally.  Also, reproductive organs are housed internally in both males and females.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>SKELETAL SYSTEM</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Frogs have 1 forearm and 1 lower leg bone, while we have 2.  Frogs lack several vertebrae and do not have a pelvis.  They also have structures not found in the human skeleton i.e. the urostyle.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>CIRCULATORY SYSTEM</TableCell>
                                    <TableCell align="center" sx={classes.myText} >A frog has a 3 chambered heart (2 upper chambers (atria) and only 1 lower chamber) compared to the 4 chambered heart a human has.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />
                    <TableContainer component={Grid} >
                        <Table aria-label="simple table">
                            <TableHead sx={{ 'td,th': { border: 3 } }}>
                                <TableRow>
                                    <TableCell sx={classes.myLabels} colSpan={3}>3.	Humans and amphibians have lots of differences too. We humans don’t have any of these distinctly amphibian features.</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>NICTITATING MEMBRANE</TableCell>
                                    <TableCell align="center" sx={classes.myText} >A clear, retractable membrane that protects each eye.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>TYMPANIC MEMBRANE</TableCell>
                                    <TableCell align="center" sx={classes.myText} >A circular eardrum located behind each eye.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>EUSTACHIAN TUBE</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Tube that connects the middle ear to the mouth, aka the buccal cavity.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>MUCOUS GLANDS</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Located in the skin, these glands secrete mucous to keep the skin moist.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>GRANULAR GLANDS</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Glands that secrete sticky, bitter substances to make amphibians unattractive to predators.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>VOMERINE TEETH</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Two rough pads on the roof of the mouth used to hold prey.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>CLOACA</TableCell>
                                    <TableCell align="center" sx={classes.myText} >A cavity that collects materials from intestines, urinary bladder, and reproductive organs.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>GLOTTIS</TableCell>
                                    <TableCell align="center" sx={classes.myText} >A slit-like opening from the throat to the lungs that plays an important role in breathing.</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ 'td,th': { border: 3 } }}>
                                    <TableCell component="th" scope="row" sx={classes.myText}>GILLS</TableCell>
                                    <TableCell align="center" sx={classes.myText} >Structures that help amphibians breathe while they are tadpoles.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Card>
        </Grid >
    )
}

