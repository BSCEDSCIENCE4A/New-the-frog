import React from 'react'
import {
    Card,
    Grid,
    Typography,
    Divider,
    Link
} from '@mui/material'

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
        fontSize: '1.5rem',
        opacity: '0.8',
        marginLeft: 5,
        fontFamily: 'Varela Round',
        color: 'black',
        padding: 1,
        "&:hover": {
            color: 'rgba(66,181,129,1)'
        },
        "@media (max-width: 600px)": {
            marginLeft: 0,
            fontSize: '1rem',
        },
    },
    myText: {
        fontSize: '1.2rem',
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'black'
    },

}
export default function Explore() {
    return (
        <Grid container sx={classes.container}>
            <Card sx={classes.myCard}>
                <Card sx={classes.myQuestion}>

                    <Typography sx={classes.myTitle}>Explore</Typography>
                    <Divider sx={classes.myDivider} />

                    <Link href="/lifecycle_of_frog/" underline="none">
                        <Typography sx={classes.myLabels}>A. &emsp; <u>LIFECYCLE OF A FROG</u></Typography>
                    </Link>
                    <Link href="/frog_external_anatomy/" underline="none">
                        <Typography sx={classes.myLabels}>B. &emsp; <u>FROG EXTERNAL ANATOMY</u></Typography>
                    </Link>
                    <Link href="/frog_internal_anatomy/" underline="none">
                        <Typography sx={classes.myLabels}>C. &emsp; <u>FROG INTERNAL ANATOMY</u></Typography>
                    </Link>
                    <Link href="/determine_the_sex_of_the_frog/" underline="none">
                        <Typography sx={classes.myLabels}>D. &emsp; <u>DETERMINE THE SEX OF THE FROG</u></Typography>
                    </Link>
                    <Link href="/similarities_and_distinction_of_human_and_frog/" underline="none">
                        <Typography sx={classes.myLabels}>E. &emsp; <u>SIMILARITIES AND DISTINCTION OF HUMAN AND FROG ANATOMY</u></Typography>
                    </Link>
                    <Link href="/anatomical_terms/" underline="none">
                        <Typography sx={classes.myLabels}>F. &emsp; <u>ANATOMICAL TERMS</u></Typography>
                    </Link>
                    <Link href="/frog_external_features_and_mouth_cavity/" underline="none">
                        <Typography sx={classes.myLabels}>G. &emsp; <u>FROG EXTERNAL FEATURES AND MOUTH CAVITY</u></Typography>
                    </Link>
                    <Link href="/the_frogs_internal_structure_and_digestive_system/" underline="none">
                        <Typography sx={classes.myLabels}>H. &emsp; <u>THE FROG’S INTERNAL STRUCTURE AND DIGESTIVE SYSTEM</u></Typography>
                    </Link>
                    <Link href="/the_frogs_circulatory_system/" underline="none">
                        <Typography sx={classes.myLabels}>I. &emsp; <u>THE FROG’S CIRCULATORY SYSTEM</u></Typography>
                    </Link>
                    <Link href="/the_frogs_respiratory_system/" underline="none">
                        <Typography sx={classes.myLabels}>J. &emsp; <u>THE FROG’S RESPIRATORY SYSTEM</u></Typography>
                    </Link>
                    <Link href="/the_frogs_urogenital_system/" underline="none">
                        <Typography sx={classes.myLabels}>K. &emsp; <u>THE FROG’S UROGENITAL SYSTEM</u></Typography>
                    </Link>
                    <Link href="/the_frogs_muscle_and_skeleton/" underline="none">
                        <Typography sx={classes.myLabels}>L. &emsp; <u>THE FROG’S MUSCLE AND SKELETON</u></Typography>
                    </Link>
                    <Link href="/the_frogs_nervous_system/" underline="none">
                        <Typography sx={classes.myLabels}>M. &emsp; <u>THE FROG’S NERVOUS SYSTEM</u></Typography>
                    </Link>
                    <Link href="/references/" underline="none">
                        <Typography sx={classes.myLabels}>N. &emsp; <u>REFERENCES</u></Typography>
                    </Link>
                </Card>
            </Card>
        </Grid >
    )
}
