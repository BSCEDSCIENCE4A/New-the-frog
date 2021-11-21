import React from 'react'
import { Grid, Typography, Card, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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
export default function FROG_INTERNAL_ANATOMY() {
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
                    <Typography sx={classes.myTitle}>C. <u>FROG INTERNAL ANATOMY</u></Typography>
                    <Typography sx={classes.myLabels}>Central Nervous System:</Typography>
                    <Typography sx={classes.myText}>They have a complex nervous system that is directed by a brain which is attached to the anterior portion of their spinal cord. The most anterior parts of the frog’s brain are the olfactory bulbs which process sent information. The cerebrum is responsible for all voluntary actions of the body, such as muscle contractions. The optic lobe sits just posterior to the cerebrum and process visual information. The cerebellum works alongside by the cerebrum by coordinating the patterns of movement initiated by the cerebrum. The spinal cord runs form the medulla oblongata through the vertebral column sending nerve impulses throughout the body.</Typography>

                    <Typography sx={classes.myLabels}>Circulatory system::</Typography>
                    <Typography sx={classes.myText}>Frogs have a closed circulatory system that is important in gas exchange throughout the body. Their heart is made up of three chambers. The right atrium receives deoxygenated blood form the body and the left atrium receives oxygenated blood from the lungs. The third chamber is a large muscular ventricle that pumps both oxygenated and deoxygenated blood to the body, lungs, and skin. The spleen, embedded in the mesentry, breaks down old red blood cells and stores excess blood.</Typography>

                    <Typography sx={classes.myLabels}>Digestive system:</Typography>
                    <Typography sx={classes.myText}>As tadpoles their intestines are much longer than when they are adults; this facilitates the breakdown of plant material. As adults, frogs are strictly carnivorous, therefore their digestive systems transform to become shorter and simpler. In an adult, food travels form the mouth into esophagus, who brings to it to the stomach. As a muscular organ, the stomach will mechanically break down the food and begin chemical digestion through the use of digestive enzymes. Some of these enzymes are produced and secreted from the pancreas. To aid the breakdown of fats, bile is made in the liver, stored in the gallbladder, and used in the duodenum of the small intestine. The lower portion of the small intestine, which is highly coiled, is known as the ilium. It is held together by a clear, highly-vascularized membrane known as the mesentry. Chemical digestion and collection of waste occurs in the largest intestine/colon, where it is then eliminated through the cloaca. Most individuals have fat bodies disperse throughout their body cavities that store long-term energy in the form of lipids.</Typography>

                    <Typography sx={classes.myLabels}>Excretory system:</Typography>
                    <Typography sx={classes.myText}>Nitrogenous waste are filtered out of the bloodstream by the kidneys. This waste passes through the ureters and is stores in the urinary bladder prior to being excreted through the cloaca.</Typography>

                    <Typography sx={classes.myLabels}>Reproductive system:</Typography>
                    <Typography sx={classes.myText}>Male frogs have testes for the production sperm. Gravid females will have egg-filled ovaries and enlarged oviducts; in females that are only smaller oviducts can be observed. The eggs are created in the ovaries and will pass through the oviducts of the cloaca.</Typography>

                    <Typography sx={classes.myLabels}>Respiratory system:</Typography>
                    <Typography sx={classes.myText}>On top of respiring through their skin, tadpoles, being aquatic, respire through their gills that are then replaced by lungs as they grow into more terrestrial adults.</Typography>

                </Card>
            </Card>
        </Grid >
    )
}

