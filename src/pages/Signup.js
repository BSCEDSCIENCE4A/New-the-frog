import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {
    Grid,
    TextField,
    Typography,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    Button,
    Divider,
    Card,
    Link
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const classes = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#3f3f3f'
    },
    myCard: {
        padding: 3,
        margin: 2,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage:`url(${images})`,
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)"
    },
    myTextField: {
        width: 300,
        margin: 1,


    },
    myTitle: {
        fontSize: '2rem',
        fontFamily: 'Varela Round',
        fontWeight: 'bold',
        color: 'black'
    },
    myText: {
        fontSize: '1rem',
        opacity: '0.7',
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'black'
    },
    myLabels: {
        fontSize: '1rem',
        paddingLeft: 1,
        textAlign: 'center',
        fontFamily: 'Varela Round',
        color: 'black'
    },
    myDivider: {
        border: '1px solid',
        width: 350,
        textAlign: 'center',
        margin: 1,
        color: 'white'
    }
}

export default function Register() {

    const [payload, setPayload] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        email: '',
        showPassword: false,
        showCPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPayload({
            ...payload,
            showPassword: !payload.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowCPassword = () => {
        setPayload({
            ...payload,
            showCPassword: !payload.showCPassword,
        });
    };

    const handleMouseDownCPassword = (event) => {
        event.preventDefault();
    };

    const signup = (e) => {
        e.preventDefault();
        if (!payload.email || !payload.password || !payload.confirmPassword) {
          alert("Please fill all the fields");
        } else if (payload.password !== payload.confirmPassword) {
          alert("Password not match");
        } else {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, payload.email, payload.password, payload.confirmPassword)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
               navigate("/main");
                console.log("login",user)
                // ...
              })
              .catch((error) => {
                alert('error')
                // ..
              });
        }
      };
    const navigate = useNavigate();
    const handleNext = () => {
       navigate("/signIn/*") 
    };
    return (
        <Grid container sx={classes.container}>
            <Card sx={classes.myCard}>
                <Typography sx={classes.myTitle}>Sign Up</Typography>

                <Divider sx={classes.myDivider}></Divider>
                <TextField sx={{ ...classes.myTextField, }}
                    label="Email" color="secondary"   value={payload.email}   onChange={handleChange('email')}/>

                <FormControl sx={classes.myTextField} variant="outlined" color='secondary' >
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"

                        type={payload.showPassword ? 'text' : 'password'}
                        value={payload.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {payload.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={classes.myTextField} variant="outlined" color='secondary' >
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={payload.showCPassword ? 'text' : 'password'}
                        value={payload.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowCPassword}
                                    onMouseDown={handleMouseDownCPassword}
                                    edge="end"
                                >
                                    {payload.showCPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Confirm Password"
                    />
                </FormControl>

                <Button
                    variant="contained"
                    onClick={signup}
                    sx={{ textTransform: 'none', background: 'radial-gradient(circle, rgba(41,119,135,1) 0%, rgba(6,31,129,1) 100%)', borderRadius: 8 }}>
                    <Typography sx={{ fontFamily: 'Varela Round', fontSize: '1.2rem', }}>
                        Sign Up
                    </Typography>
                </Button>
                <Typography sx={{ fontSize: 12 }}>Back to
                    <Link onClick={handleNext}
                        sx={{ fontSize: 12 }}>Login</Link></Typography>
            </Card>
        </Grid>
    )
}
