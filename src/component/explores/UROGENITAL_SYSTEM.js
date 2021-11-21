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


export default function UROGENITAL_SYSTEM() {
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
                    <Typography sx={classes.myTitle}>K. <u>THE FROG’S UROGENITAL SYSTEM</u></Typography>
                    <Typography sx={classes.myText}>It is primarily involved in assisting the frog in carrying out urine excretion and reproduction. The main excretory product of frogs is urea and hence frogs are ureotelic animals.</Typography>
                    <Typography sx={classes.myText}>The excretory system is the same in both male and female frogs, however, the reproductive structures differ. The excretion in frogs is majorly carried out through kidneys (filters blood), ureters (transportation of urine from kidneys to bladder), cloaca (structure where eggs/sperm, urine and faeces leaves the body) and urinary bladder (stores urine).</Typography>
                    <Typography sx={classes.myText}>In frogs, the sexes are separate hence they are <u>dioecious</u>. That is to say that male and female frogs can be distinguished/identified externally only during the season of breeding. This is a result of males developing a <u>copulatory or nuptial pad</u> on its first digit of the forelimb. This characteristic is not seen in female frogs. Additionally, males possess vocal sacs to produce comparatively louder sounds. Consequently, the male and female urogenital system of frogs are studied separately.</Typography>
                    <Typography sx={classes.myText}>Let us look at the male and female urogenital system of frog:</Typography>

                    <Typography sx={classes.myTitle}>THE FROG’S UROGENITAL SYSTEM - MALES</Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; Kidney -</i></b> Kidneys are dark red and bean like structures, compact, occurring in a pair located posteriorly in the body cavity on both sides of the vertebral column. Each kidney consists of many functional and structural units – nephrons or uriniferous tubules. </Typography>
                    <Typography sx={classes.myText}><b><i>b.&#41; Urinary Bladder -</i></b> it is a thin walled structure present ventral to the rectum. It stores urine.</Typography>
                    <Typography sx={classes.myText}><b><i>c.&#41; Ureter -</i></b> the ureter or the urinogenital duct occur in pairs, projects from the kidney in the form of ureters in males. </Typography>
                    <Typography sx={classes.myText}><b><i>d.&#41; Testis -</i></b> These structures occur in a pair and are yellowish in appearance. These ovoid structures are located in the upper section of the kidneys by a double fold of the peritoneum known as mesorchium. </Typography>
                    <Typography sx={classes.myText}><b><i>e.&#41; Bidder’s canal -</i></b> It is a canal into which the vasa efferentia opens into the kidneys. Eventually this canal meets the ureter. This structure is responsible for passing urine, ova, water and sperm.</Typography>
                    <Typography sx={classes.myText}><b><i>f.&#41; Vasa efferentia -</i></b> It emerges from the testis and are 10-12 in number. They pass through mesorchium and move into the kidneys.</Typography>
                    <Typography sx={classes.myText}><b><i>g.&#41; Cloaca -</i></b> It is a small chamber mediating to pass urine, faeces and sperms to the outside. The ureter and urinary bladder opens into the cloaca.</Typography>

                    <Typography sx={classes.myTitle}>THE FROG’S UROGENITAL SYSTEM - FEMALES</Typography>
                    <Typography sx={classes.myText}>The structures of the urogenital system of frogs in females are:</Typography><Typography sx={classes.myText}>The structures of the urogenital system of frogs in females are:</Typography>
                    <ul>
                        <li>
                            <Typography sx={classes.myText}>Kidney</Typography>
                        </li>
                        <li>
                            <Typography sx={classes.myText}>Urinary Bladder</Typography>
                        </li>
                        <li>
                            <Typography sx={classes.myText}>Ureter</Typography>
                        </li>
                        <li>
                            <Typography sx={classes.myText}>Ovaries</Typography>
                        </li>
                        <li>
                            <Typography sx={classes.myText}>Oviduct</Typography>
                        </li>
                        <li>
                            <Typography sx={classes.myText}>Cloaca</Typography>
                        </li>
                    </ul>
                    <Typography sx={classes.myText}>The common structures in both male and female urogenital systems in frogs are kidneys, ureters and urinary bladder, their functionalities remain the same.</Typography>
                    <Typography sx={classes.myText}><b><i>g.&#41; Ovary -</i></b> It is a paired structure present close to kidneys. These yellow-colored structures are present on the outer side of the kidneys by a fold of peritoneum known as the mesovarium. Through the process of oogenesis, they produce ova. A mature female releases close to 2500-3000 ova at once.</Typography>
                    <Typography sx={classes.myText}><b><i>g.&#41; Oviduct -</i></b> These structures are paired and found on each side of the ovary. They are thin, large and coiled structures appearing white in color. These ducts open separately into the cloaca.</Typography>

                </Card>
            </Card>
        </Grid >
    )
}

