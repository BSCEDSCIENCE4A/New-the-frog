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


export default function CIRCULATORY_SYSTEM() {
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
                    <Typography sx={classes.myTitle}>I. <u>THE FROG’S CIRCULATORY SYSTEM</u></Typography>
                    <Typography sx={classes.myLabels}>1. Blood Vascular System</Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; Frog’s Heart</i></b></Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. pericardium  –</b> an enclosing double layered sac. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. ventricle  –</b> conical, thick muscular-walled posterior portion.  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. left and right atria </b> thin-walled portions anterior to the ventricle; the division between the atria is not visible externally.  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. conus arteriosus -</b> thickened muscular tube at the right side of ventricle; extends obliquely and divides anteriorly into two trunks. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>v.	truncus arteriosus –</b> two large trunks anterior to conus arteriosus. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vi. sinus venosus –</b> triangular, thin-walled sac on dorsal side </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>vii. interatrial septum  –</b> partition separating the left and right atria.  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>viii. sino-atrial aperture –</b> large opening in the right atrium through which blood enters the sinus venosus.  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ix. sino-atrial valve –</b> small flaps guarding the sino-atrial aperture which prevent backflow of blood. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>x.	atrio-ventricular aperture -</b> large opening through which both atria empty into the ventricle.  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>xi. spiral valve –</b> S-shaped longitudinal fold attached along dorsal wall of the conus arteriosus. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>xii. opening of pulmonary vein  –</b> opening at left atrium </Typography>

                    <Typography sx={classes.myText}><b><i>b.&#41; Veins (Venous System) </i></b></Typography>
                    <Typography sx={classes.myText}>Veins are generally vessels larger than the accompanying arteries. They are not elastic and are thin-walled by comparison. They carry blood from the capillaries back to heart under relatively low pressure. Uninjected veins are usually filled with coagulated blood and appear dark and flat.</Typography>
                    <Typography sx={classes.myText}><i>1. Precaval vein or Anterior Vena Cava</i></Typography>
                    <Typography sx={classes.myText}>- Two; on renters each antero-lateral angle of sinus venosus; each is formed by union of 3 veins: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>a.&#41; External jugular vein -</b> most anterior; formed by the union of:</Typography>
                    <Typography sx={classes.myText}>&emsp;&emsp;<b>i. lingual vein -</b> near midline, from tongue and floor of mouth. </Typography>
                    <Typography sx={classes.myText}>&emsp;&emsp;<b>ii. mandibular vein –</b> lateral, from lower jaw. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>b.&#41; Innominate vein -</b> runs dorsally; formed by the union of: </Typography>
                    <Typography sx={classes.myText}>&emsp;&emsp;<b>i. internal jugular vein –</b> from interior of skull. </Typography>
                    <Typography sx={classes.myText}>&emsp;&emsp;<b>ii. subscapular vein –</b> from dorsal muscle of shoulder and arm. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>c.&#41; Subclavian vein -</b> most posterior; formed by joining of: </Typography>
                    <Typography sx={classes.myText}>&emsp;&emsp;<b>i. brachial vein –</b> from arm. </Typography>
                    <Typography sx={classes.myText}>&emsp;&emsp;<b>ii. musculo-cutaneous vein –</b> from muscles and skin on dorsal and lateral parts of head and trunk (may not be visible in skinned specimen). </Typography>

                    <Typography sx={classes.myText}><i>2. Postcaval vein or Posterior Vena Cava</i></Typography>
                    <Typography sx={classes.myText}>- Single, dorsal, from kidneys to above stomach and through liver; enters posterior end of sinus venosus; formed by the confluence of: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>a.&#41; Efferent renal veins -</b> several; medial from each kidney. Postcaval also receives.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>b.&#41; Hepatic veins -</b> two; short, from liver just behind sinus venosus. </Typography>

                    <Typography sx={classes.myText}><i>3. Pulmonary Veins </i></Typography>
                    <Typography sx={classes.myText}>- One from each lung; both enter left atrium just anterior to sinus venosus. </Typography>

                    <Typography sx={classes.myText}><i>4. Abdominal Vein  </i></Typography>
                    <Typography sx={classes.myText}>- Single, inside the linea alba; joins portal vein into right lobe of liver; formed by the union of: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>a.&#41; Pelvic veins -</b> two; at posterior end of coelom; each as branch from femoral vein. The abdominal vein also receives.</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>b.&#41; Vesicular veins  -</b> two; from urinary bladder. </Typography>

                    <Typography sx={classes.myText}><i>5. Hepatic Portal Vein </i></Typography>
                    <Typography sx={classes.myText}>- Single, veins from the digestive organs (stomach, intestines, and pancreas) and the spleen join to form the hepatic portal vein that parallels the bile duct and divides within the liver. Blood from the liver (including that from hepatic artery) leaves by the hepatic veins and join the postcaval vein. </Typography>

                    <Typography sx={classes.myText}><i>6. Renal Portal System </i></Typography>
                    <Typography sx={classes.myText}>- A renal portal vein runs laterally along each kidney and gives off several afferent renal veins into that organ. Each renal portal vein (common iliac) is formed from: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>a.&#41; Femoral vein -</b> from anterior side of thigh (called external iliac vein) from origin of pelvic vein to junction of femoral with sciatic vein. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>b.&#41; Sciatic vein -</b> from posterior side of thigh. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>c.&#41; Dorso-lumbar veins -</b> several; from abdominal wall; blood from a hind leg thus may return through either the abdominal vein or renal portal vein. </Typography>


                    <Typography sx={classes.myLabels}>2. ARTERIES (ARTERIAL SYSTEM) </Typography>
                    <Typography sx={classes.myText}>Arteries are thick-walled and elastic tubes that carry blood under relatively high pressure from the heart to the capillaries and tissues of the body. Uninjected arteries feel like tiny rubber tubes when pinched between the thumb and forefinger and are usually empty in pre-served specimens.
                        Each of the two long forks of the truncus arteriosus are divided into three major vessels or aortic arches:
                    </Typography>

                    <Typography sx={classes.myText}><b><i>a.&#41; Common Carotid Artery (anterior arch) divides into:</i></b></Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. External carotid or lingual artery -</b> to tongue and floor of mouth </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. Internal carotid artery –</b> dilated as carotid gland at its base; dorsal to posterior roof of mouth and gives off: </Typography>
                    <ul>
                        <li>
                            <Typography sx={classes.myText}><b>palatine artery –</b> on roof of mouth </Typography>
                            <Typography sx={classes.myText}><b>cerebral artery  –</b> into cranium, to brain  </Typography>
                            <Typography sx={classes.myText}><b>ophthalmic artery  –</b> to eye </Typography>
                        </li>
                    </ul>
                    <Typography sx={classes.myLabels}>3. SYSTEMIC OR AORTIC ARCH (MIDDLE ARCH) </Typography>
                    <Typography sx={classes.myText}>Passes dorsally beside esophagus and turns posteriorly to unite with its mate and form the dorsal aorta. </Typography>
                    <Typography sx={classes.myText}>Each systemic arch gives off: </Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41;Laryngeal artery -</i></b> dorsal to larynx </Typography>

                    <Typography sx={classes.myText}><b><i>b.&#41;Occipito-vertebral artery -</i></b> short; dorsal; divides into: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i. occipital artery -</b> anterior; to side of head and jaws  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. vertebral artery -</b> posterior; beside vertebral column  </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. esophageal artery -</b> to esophagus  </Typography>

                    <Typography sx={classes.myText}><b><i>c.&#41;Subclavian or Brachial artery -</i></b> to arm (occasionally as branch of occipitovertebral artery) </Typography>

                    <Typography sx={classes.myText}><b><i>d.&#41; Dorsal aorta -</i></b> the union of two systemic arches which in turn gives off: </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i.	coeliaco-mesenteric artery –</b> one; which branches into: celiac artery – one; to the liver (hepatic artery and stomach) anterior mesenteric artery – one; to the intestine and spleen. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. urogenital arteries –</b> four to six pairs; to the kidneys, gonads, and fat bodies. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. lumbar arteries –</b> several; to dorsal body wall and nerve cord. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iv. posterior mesenteric artery –</b> one; to rectum. </Typography>

                    <Typography sx={classes.myText}><b><i>e.&#41;Common iliac arteries -</i></b> Each in turn gives off:</Typography>
                    <Typography sx={classes.myText}>&emsp;<b>i.	epigastric artery –</b> to ventral abdominal wall; a small branch (vesicular artery) to rectum and bladder. </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>ii. femoral or external iliac artery –</b> small; to anterior part of thigh.
                        The common iliac artery then continue as:
                    </Typography>
                    <Typography sx={classes.myText}>&emsp;<b>iii. sciatic artery or internal iliac artery –</b> to dorsal part of thigh, and divided to supply the shank and foot. </Typography>

                    <Typography sx={classes.myLabels}>4. CIRCUITS </Typography>
                    <Typography sx={classes.myText}>- In vertebrate animals other than fishes, the vascular system is generally divided into two separate circuits: </Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; Pulmonary circuit  -</i></b> carrying blood from the heart to lungs and back to the heart. </Typography>
                    <Typography sx={classes.myText}><b><i>b.&#41; Systemic circuit  -</i></b> carrying blood from the heart to the body tissues and back to the heart again. </Typography>
                    <Typography sx={classes.myText}>In frog the pulmonary circuit is more appropriately called <i><u>pulmocutaneous circuit</u></i> since skin circulation is also included in the pulmonary circuit.</Typography>
                </Card>
            </Card>
        </Grid >
    )
}

