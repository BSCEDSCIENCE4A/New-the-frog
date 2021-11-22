import React from 'react'
import { Grid, Typography, Card, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '10vw',
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
        paddingTop: 0,
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
export default function FROG_EXTERNAL_ANATOMY() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <PerfectScrollbar>
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>B. <u>FROG EXTERNAL ANATOMY</u></Typography>

                    <Typography sx={classes.myLabels}>Movement:</Typography>
                    <Typography sx={classes.myText}>Like all chordates, amphibians exhibit bilateral symmetry. Adults are tetrapod that use all four limbs to move in a variety of ways. They have strong hindlimbs for swimming, climbing, and jumping; they utilize their forelimbs to aid in gripping surfaces. Digits are present in both their fore- and hindlimbs; the digits on their hindlimbs are modified with webbing in between them to aid in swimming.</Typography>

                    <Typography sx={classes.myLabels}>Feeding:</Typography>
                    <Typography sx={classes.myText}>Frogs eat insects, catching them with their long, sticky tongue. They also eat small fish and worms. The frog’s mouth consists of two parts, the maxilla (upper jaw) and the mandible (lower jaw). Located on the maxilla are vomerine teeth and maxillary teeth that are located along the outer ridge of the maxilla. They do not chew their food, however these help prevent the escape of prey out of the animal’s mouth. Their food is swallowed into the esophagus, a large, horizontal opening at the back of the mouth.</Typography>

                    <Typography sx={classes.myLabels}>Response:</Typography>
                    <Typography sx={classes.myText}>Amphibian’s eyes are large and can move in their sockets; they are covered by a transparent flap of skin known as the nictitating membrane. Thus membrane can be closed over the eye to help protect it while underwater and to keep moisture in while on land. Forgs can detect sound waves through their tympanic membranes, allowing them to better communicate and sense heir environment while both on land and under the water.</Typography>

                    <Typography sx={classes.myLabels}>Respiration:</Typography>
                    <Typography sx={classes.myText}>Gas exchange can occur through the epidermis (skin) in both tadpoles and adult frog. Adult frogs are also equipped with lungs. Gases taken in through their external nares, which enter mouth cavity through the internal nares. From the mouth, the air travels through the glottis to enter the lungs.</Typography>

                    <Typography sx={classes.myLabels}>Excretion:</Typography>
                    <Typography sx={classes.myText}>Frogs eliminate waste through their cloacal opening; this is found between their hind legs.</Typography>

                    <Typography sx={classes.myLabels}>Reproduction:</Typography>
                    <Typography sx={classes.myText}>Frogs have individual sexes and carry out external fertilization. The male will initiate the release of eggs from the female’s cloacal opening by squeezing her. As the eggs are released, he ejects his sperm from his cloacal opening to fertilize them.</Typography>

                    <Typography sx={classes.myLabels}>Classification and Evolution:</Typography>
                    <Typography sx={classes.myText}>Kingdom Animalia (animals), Phylum Chordata, Class Amphibia (amphibians), Order Anura (Frogs and toads). The first true frogs evolved during the early Jurassic period, about 200 million years ago (during the time of the dinosaurs)</Typography>

                </Card>
            </Card>
        </Grid >
        </PerfectScrollbar>
    )
}

