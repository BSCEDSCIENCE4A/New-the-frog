import React from 'react'
import {
    Card,
    Grid,
    Typography,
    Divider,
    Link,
    Button
} from '@mui/material'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Nav from './Nav'

const classes = {
    container: {
       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50vw',
        minHeight: '50vh',
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
    myDivider: {
        border: '1px solid',
        minWidth: '50vw',
        textAlign: 'center',
        margin: 2,
        color: 'black'
    },

    myTitle: {
        fontSize: '2rem',
        opacity: '0.8',
        fontFamily: 'Varela Round',
        textAlign: 'center',
        color: 'black',
        padding: 1,
        "@media (max-width: 600px)": {
            fontSize: '1.5rem',
        },
    },
    myLabels: {
        color:'#d2d6d6',
        marginLeft: 5,
        fontSize: '15px',
        justifyContent:'center',
        alignItems:'center',
        fontWeight: 'bold',
        padding: 1,
        "&:hover": {
            color: 'rgba(66,181,129,1)'
        },
        "@media (max-width: 600px)": {
            marginLeft: 0,
        },
    },
    myText: {
        fontSize: '1.2rem',
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'black'
    },
    myButton: {
        textTransform: 'none',
        borderRadius: 20,
        minWidth: 'auto',
        minHeight: '1vh',
        margin: 2,
        color:' rgb(37,157,191)',
background: 'radial-gradient(circle, rgba(37,157,191,1) 0%, rgba(0,50,121,1) 100%)'
},
 
}
export default function Explore() {
    return (
        <PerfectScrollbar>
        <Grid container sx={classes.container}>
            <Card sx={classes.myCard} >
                <Nav/>
                <Card sx={classes.myQuestion}>

                    <Typography sx={classes.myTitle}>Explore</Typography>
                    <Divider sx={classes.myDivider} />

                    <Button href="/lifecycle_of_frog/" sx={classes.myButton}>
                        <Typography sx={classes.myLabels}>LIFECYCLE OF A FROG</Typography>
                    </Button>
                    <Button href="/frog_external_anatomy/" sx={classes.myButton}>
                        <Typography sx={classes.myLabels}>FROG EXTERNAL ANATOMY</Typography>
                    </Button>
                    <Button href="/frog_internal_anatomy/" sx={classes.myButton}>
                        <Typography sx={classes.myLabels}>FROG INTERNAL ANATOMY</Typography>
                    </Button>
                    <Button href="/determine_the_sex_of_the_frog/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '14px',}}>DETERMINE THE SEX OF THE FROG</Typography>
                    </Button>
                    <Button href="/similarities_and_distinction_of_human_and_frog/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '13px',paddingLeft: 3, textAlign:'center' }}>SIMILARITIES AND DISTINCTION OF HUMAN AND FROG ANATOMY</Typography>
                    </Button>
                    <Button href="/anatomical_terms/" sx={classes.myButton}>
                        <Typography sx={classes.myLabels}>ANATOMICAL TERMS</Typography>
                    </Button>
                    <Button href="/frog_external_features_and_mouth_cavity/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '13px',paddingLeft: 2, textAlign:'center' }}>FROG EXTERNAL FEATURES AND MOUTH CAVITY</Typography>
                    </Button>
                    <Button href="/the_frogs_internal_structure_and_digestive_system/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '13px',paddingLeft: 2, textAlign:'center' }}> FROG’S INTERNAL STRUCTURE AND DIGESTIVE SYSTEM</Typography>
                    </Button>
                    <Button href="/the_frogs_circulatory_system/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '13px',paddingLeft: 2, textAlign:'center' }}>THE FROG’S CIRCULATORY SYSTEM</Typography>
                    </Button>
                    <Button href="/the_frogs_respiratory_system/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '13px',paddingLeft: 2, textAlign:'center' }}>THE FROG’S RESPIRATORY SYSTEM</Typography>
                    </Button>
                    <Button href="/the_frogs_urogenital_system/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '13px',paddingLeft: 2, textAlign:'center' }}>THE FROG’S UROGENITAL SYSTEM</Typography>
                    </Button>
                    <Button href="/the_frogs_muscle_and_skeleton/" sx={classes.myButton}>
                        <Typography sx={{...classes.myLabels,fontSize: '13px',paddingLeft: 2, textAlign:'center' }}>THE FROG’S MUSCLE AND SKELETON</Typography>
                    </Button>
                    <Button href="/the_frogs_nervous_system/" sx={classes.myButton}>
                        <Typography sx={classes.myLabels}>THE FROG’S NERVOUS SYSTEM</Typography>
                    </Button>
                    <Button href="/references/" sx={classes.myButton}>
                        <Typography sx={classes.myLabels}>REFERENCES</Typography>
                    </Button>
                </Card>
            </Card>
        </Grid >
        </PerfectScrollbar>
    )
}
