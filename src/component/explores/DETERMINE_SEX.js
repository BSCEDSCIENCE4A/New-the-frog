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
function createData(body, skin, foot) {
    return { body, skin, foot };
}

export default function DETERMINE_SEX() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    const rows = [
        createData('BODY', 'MASSIVE AND BULKY SKIN', 'STREAMLINED'),
        createData('SKIN', 'ROUGH AND WARTY', 'MOIST AND SLIPPERY'),
        createData('FOOT DIGITS', 'SEPARATE', 'WEBBED'),
    ];
    return (
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>D. <u>DETERMINE THE SEX OF THE FROG</u></Typography>
                    <Typography sx={classes.myLabels}>A toad and a frog can be distinguished externally from each other, using the following features:</Typography>
                    <TableContainer component={Grid}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ 'td,th': { border: 3 } }}>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center" sx={classes.myLabels}>TOAD</TableCell>
                                    <TableCell align="center" sx={classes.myLabels}>FROG</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ 'td,th': { border: 3 } }}
                                    >
                                        <TableCell component="th" scope="row" sx={classes.myText}>
                                            {row.body}
                                        </TableCell>
                                        <TableCell align="center" sx={classes.myText}>{row.skin}</TableCell>
                                        <TableCell align="center" sx={classes.myText}>{row.foot}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography sx={classes.myLabels}>The male frog or toad can be distinguished from females by the following: </Typography>
                    <Typography sx={classes.myText}>1. The first finger (thumb) of the male is swollen especially during breeding season. </Typography>
                    <Typography sx={classes.myText}>2. The male has dark pigmented areas at the angles of the lower jaw on the ventral surface of the head. This is the most reliable indicator when the rest fail to show. </Typography>
                    <Typography sx={classes.myText}>3. The female is generally larger and the male smaller. But using size is unreliable as it can also be affected by age.</Typography>

                </Card>
            </Card>
        </Grid >
    )
}

