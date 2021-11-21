import React from 'react'
import {
    Grid,
    Typography,
    Card,
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
        paddingTop: 0,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        fontFamily: 'Varela Round',
        color: 'black',
        "@media (max-width: 600px)": {
            marginLeft: 0,
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


export default function MUSCLE_AND_SKELETON_SYSTEM() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}><b></b>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>L. <u>THE FROG’S MUSCLE AND SKELETON</u></Typography>
                    <Typography sx={classes.myText}>The frog's body is supported and protected by a bony framework called the skeleton. The skull is flat, except for an expanded area that encases the small brain. Only nine vertebrae make up the frog's backbone, or vertebral column. The human backbone has 24 vertebrae. The frog has no ribs. </Typography>
                    <Typography sx={classes.myText}>The shoulders and front legs of the frog are somewhat similar to man's shoulders and arms. The frog has one "forearm" bone, the radio-ulna. Man has two forearm bones, the radius and the ulna. Both frog and man have one "upper arm" bone, the humerus. </Typography>
                    <Typography sx={classes.myText}>The hind legs of the frog are highly specialized for leaping. The single "shinbone" is the tibiofibula. Man has two lower leg bones, the tibia and the fibula. In man and in the frog, the femur is the single upper leg (thigh) bone. </Typography>
                    <Typography sx={classes.myText}>As in other vertebrates, the frog skeleton is moved by muscles. Skeleton-moving muscles are made of skeletal, or "striated," muscle. Internal organs contain smooth muscle tissue. </Typography>

                    <Typography sx={classes.myTitle}>DESCRIPTION</Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41;Maxillary:</i></b> bony part of the jaw.</Typography>
                    <Typography sx={classes.myText}><b><i>b.&#41;Orbital cavity:</i></b> skull cavity that contains the eye.</Typography>
                    <Typography sx={classes.myText}><b><i>c.&#41;Quadratojugal:</i></b> cheek bone.</Typography>
                    <Typography sx={classes.myText}><b><i>d.&#41;Prootic:</i></b> bones forming the auditory region.</Typography>
                    <Typography sx={classes.myText}><b><i>e.&#41;Phalange:</i></b> each of the small bones forming the fingers.</Typography>
                    <Typography sx={classes.myText}><b><i>f.&#41;Occipital lateral:</i></b> occipital lateral bone.</Typography>
                    <Typography sx={classes.myText}><b><i>g.&#41;Carpus:</i></b> each of the bones forming the wrist.</Typography>
                    <Typography sx={classes.myText}><b><i>h.&#41;Metacarpus:</i></b> each of the bones forming the part of the hand between the fingers and the wrist.</Typography>
                    <Typography sx={classes.myText}><b><i>i.&#41;Urostyle:</i></b> adaptation of one or several vertebrae, stretching the hindquarters.</Typography>
                    <Typography sx={classes.myText}><b><i>j.&#41;Ilium:</i></b> projecting hip bone.</Typography>
                    <Typography sx={classes.myText}><b><i>k.&#41;Ischium:</i></b> one of three bones forming the ilium.</Typography>
                    <Typography sx={classes.myText}><b><i>l.&#41;Calcaneum:</i></b> projecting heel bone.</Typography>
                    <Typography sx={classes.myText}><b><i>m.&#41;Talus:</i></b> bone jointed with the leg bones.</Typography>
                    <Typography sx={classes.myText}><b><i>n.&#41;Phalanges:</i></b> each of the bones forming the toes.</Typography>
                    <Typography sx={classes.myText}><b><i>o.&#41;Metatarsus:</i></b> each of the bones forming the part of the foot between the toes and the heel.</Typography>
                    <Typography sx={classes.myText}><b><i>p.&#41;Tarsus:</i></b> each of the bones forming the heel.</Typography>
                    <Typography sx={classes.myText}><b><i>q.&#41;Femur:</i></b> thigh bone.</Typography>
                    <Typography sx={classes.myText}><b><i>r.&#41;Tibiofibula:</i></b> leg bone.</Typography>
                    <Typography sx={classes.myText}><b><i>s.&#41;Humerus:</i></b> arm bone.</Typography>
                    <Typography sx={classes.myText}><b><i>t.&#41;Radio-ulna:</i></b> forearm bone.</Typography>
                    <Typography sx={classes.myText}><b><i>u.&#41;Scapular:</i></b> shoulder bone.</Typography>
                    <Typography sx={classes.myText}><b><i>v.&#41;Pterygoid:</i></b> one of the bones of the palate, forming the root of the mouth.</Typography>
                    <Typography sx={classes.myText}><b><i>w.&#41;Skull:</i></b> bony case of the brain.</Typography>

                </Card>
            </Card>
        </Grid >
    )
}

