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


export default function INTERNAL_FEATURES() {
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
                    <Typography sx={classes.myTitle}>H. <u> FROG’S INTERNAL STRUCTURE AND DIGESTIVE SYSTEM</u></Typography>
                    <Typography sx={classes.myLabels}>1. BODY CAVITY</Typography>
                    <Typography sx={classes.myText}>The body cavity (coelom) is lined with a smooth glistening membrane called peritoneum. This membrane is doubled dorsally to form the mesenteries, and to surround and cover the organs that they support. The mesenteries are folds of the peritoneum through which nerves and blood vessels reach the intestines.</Typography>
                    <Typography sx={classes.myText}>The pericardial sac surrounding the heart is also composed of peritoneum which, in a similar manner, bends back around the blood vessels to cover the heart itself. This pericardial sac is really a part of the coelom that has been separated from the rest of the body cavity by folding during embryonic development. The heart lies in a special part of the coelom called pericardial cavity. In a female frog, the peritoneum is perforated by the openings of the oviducts. </Typography>
                    <Typography sx={classes.myText}>The body wall surrounding the coelom consists of the skin, lymph sacs, muscles, and peritoneum.</Typography>

                    <Typography sx={classes.myLabels}>2. INTERNAL ORGANS</Typography>
                    <Typography sx={classes.myText}>Beginning at the anterior end of the body cavity and using the forceps and a probe, locate and identify the following structures: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. lungs –</b> paired, soft, spongy baglike structures when filled with air; often shrivelled.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. heart –</b> reddish brown, conical shape, enclosed within a delicate membrane. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. liver –</b> large, firm reddish brown, composed of three lobes. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. gall bladder or bile sac -</b> thin, spherical greenish sac between the middle and right lobes of liver. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>v.	stomach  –</b> long, whitish, along left side and dorsal to live. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vi. small intestine –</b> yellowish or grayish; an irregularly coiled tube posterior to the stomach. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vii. spleen –</b> small, round, dark and reddish located behind stomach. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>viii. kidneys –</b> two; elongate dark brown on dorsal wall above peritoneum. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ix. fat bodies –</b> two; yellowish finger-like lobes attached and anterior to kidneys. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>x. ovaries  -</b> two, found in female only; appear granular if no egg is present or distended with small black and white eggs. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>xi. oviducts  –</b> two (in female only), long, whitish and wavy, along either side of mid-dorsal line. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>xii. testes –</b> two (in males only), pink or yellowish, bean-shaped, located at the anterior end of each kidney. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>xiii. adrenal gland –</b> a long orange or yellow band of tissue on the surface of each kidney.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>xiv. urinary bladder  –</b> thin-walled, bi-lobed sac which opens into the ventral wall of cloaca.</Typography>

                    <Typography sx={classes.myLabels}>3. DIGESTIVE SYSTEM</Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; Digestive Track</i></b></Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i.</b> oral cavity or mouth cavity with its tongue and other parts.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. pharynx –</b> behind the mouth cavity; lined with cilia.  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. esophagus –</b> short, muscular tube; to locate, insert probe into pharynx.  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. stomach –</b> whitish, large, with smaller anterior or cardiac end but the posterior or pyloric end is larger and expanded; note that the posterior end is closed by a pyloric valve or sphincter.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>v.	small intestine –</b> whitish, slender, irregularly coiled; portions divided into short anterior portion called duodenum, which receives bile duct; the long posterior portion is the ileum.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vi. large intestine –</b> short but wider terminal portion of the intestine; connected to cloaca. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vii. cloaca–</b> much dilated posterior portion of the large intestine that receives materials from the excretory and reproductive systems; located within the pelvic girdle. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>viii. anus –</b> the posterior external opening. </Typography>

                    <Typography sx={classes.myLabels}>4. DIGESTIVE SYSTEM</Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; Liver</i></b></Typography>
                    <Typography sx={classes.myText}> - Large reddish, brown gland partly covering stomach which secretes bile; divided into left, median, and right lobes. It is suspended from the body wall by a ventral ligament. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i.	gall bladder –</b> a small greenish sac containing bile found at the ventral side of the median lobe. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. hepatic ducts –</b> two fused ducts, from the left and right lobes of the liver. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. cystic duct –</b> the duct connected to the neck of the gall bladder. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. common bile duct–</b> large duct that enters the duodenum, formed by the cystic, hepatic and pancreatic ducts and surrounded by tissues of the pancreas. </Typography>

                    <Typography sx={classes.myText}><b><i>b.&#41; Pancreas </i></b></Typography>
                    <Typography sx={classes.myText}>- Small elongated irregularly shaped gland between the stomach and the duodenum that extends from the liver to a short distance of the pylorus. Locate the pancreatic duct to the duodenum.</Typography>
                </Card>
            </Card>
        </Grid >
    )
}

