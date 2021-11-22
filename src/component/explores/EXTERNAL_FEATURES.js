import React from 'react'
import {
    Grid,
    Typography,
    Card,
    IconButton
} from '@mui/material'
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


export default function EXTERNAL_FEATURES() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <PerfectScrollbar>
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}><b></b>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>G. <u>FROG EXTERNAL FEATURES AND MOUTH CAVITY</u></Typography>
                    <Typography sx={classes.myLabels}>1. EXTERNAL ANATOMY</Typography>
                    <Typography sx={classes.myText}><b>Axial Region</b></Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; Head </i></b></Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. snout -</b> protruding region of the head ending; anterior to the eyes in a more or less triangular border. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. external nares (nostrils) – </b> two small openings near the tip of the snout. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. eyes – </b> found at the dorso-lateral portion of the head; these protected by the upper eyelids, lower eyelids, and the transparent third eyelid called nictitating membrane.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. tympanic membrane (eardrum) – </b> away from the place of attachment; toward the periphery of extremities of the body; opposite of proximal.</Typography>

                    <Typography sx={classes.myText}><b><i>b.&#41; trunk </i></b></Typography>
                    <Typography sx={classes.myText}>The trunk is divisible into two regions: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. thoracic or chest region – </b>the anterior half; located in this region of the toad, in the poison or parotoid glands, which are elevated structures of the skin just behind the tympanum. These glands are absent in frogs. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii.	abdominal or lumbar region – </b>the posterior half; the ventral portion is the abdominal region, and the dorsal is the lumbar region. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii.	sacral hump –  </b> marked elevation of the mid-dorsal surface of the trunk near the posterior end; located at the posterior end of the pelvic girdle; very evident in frogs and not in toads.</Typography>

                    <Typography sx={classes.myText}><b>Appendicular Region </b></Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; Forelimbs -</i></b> the two forward appendages; at anterior end of the trunk; each consists of:</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. upper arm  -</b> the first segment attached to the trunk.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. middle forearm – </b> next segment immediately below the forearm.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. carpus or wrist – </b> next to the forearm</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. manus or hand – </b> distal to the wrist. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>v. fingers – </b> four digits; the inner digit (thumb) is swollen in males. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vi.	pre-pollux – </b> rudimentary first finger; can be felt on the inner side of the hand as a short stump. </Typography>

                    <Typography sx={classes.myText}><b><i>b.&#41; Hindlimbs -</i></b> the two posterior appendages; divided into segments as follows:</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. thigh -</b> the first segment attached to the body mass. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. shank –</b> or lower leg; next segment below thigh. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii.	tarsus or ankle –</b> next segment immediately below the shank. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. pes or foot –</b> the distal end below tarsus. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>v. toes or digits –</b> these are five in number. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vi. pre-hallux –</b> a degenerated digit on the inner side of the foot; supposed to be the 6th toe. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vii.	web –</b> a membranous extension of the skin connecting one toe to the other; present only in frog but not in toad.</Typography>

                    <Typography sx={classes.myLabels}>2. MOUTH CAVITY </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i.	vomerine teeth -</b> two small batches of fine teeth between the internal nares projecting from the vomer bones; absent in toads. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. maxillary teeth –</b> row of small conical teeth on the margin of the upper jaw; absent in toads. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. internal nares –</b> two anterior openings in the roof of the mouth; these open dorsally as external nares. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. Eustachian tube openings –</b> two at the corner of the mouth near the roof of the oral cavity; each connects to middle ear. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>v. tongue –</b> large and long bilobes structure occupying a great part of the floor of the oral cavity. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vi. pharynx –</b>  most posterior part of the mouth cavity. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vii. vocal sac openings –</b> , lateral in the floor of mouth; present in males. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>viii. glottis –</b> a narrow longitudinal slit in the floor of the pharynx; an opening of the larynx or voice box into the mouth cavity. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ix. esophagus –</b> the posterior opening in the pharynx that leads to the stomach. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>x.	hyoid cartilage –</b> the supportive element of the tongue; can be located by probing the floor of the mouth below the tongue.</Typography>
                </Card>
            </Card>
        </Grid >
        </PerfectScrollbar>
    )
}

