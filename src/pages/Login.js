import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
import { useNavigate } from 'react-router';
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
       //backgroundSize: 'cover',
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
        color: 'white'
    },
    myLabels: {
        fontSize: '0.9rem',
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

export default function Login() {

    const [payload, setPayload] = useState({
        email: '',
        password: '',
        showPassword: false,
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
    const login = (e) => {
        e.preventDefault();
        if (!payload.email || !payload.password) {
          alert("Login Failed, Wrong Email/Password");
        } else {
          const auth = getAuth();
            signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
        navigate('/main');
        console.log("login",user);
        // ...
      })
      .catch((error) => {
        alert('error')
      });
        }
        
      };
      const navigate = useNavigate();
      const handleNext = () => {
         navigate("/signUp/*") 
      };
    
    return (
        <Grid container sx={classes.container}>
            <Card sx={classes.myCard}>
                <Typography sx={{...classes.myTitle}}>Log in</Typography>

                <Divider sx={classes.myDivider}></Divider>
                <TextField sx={classes.myTextField}
                    label="Email"
                    variant="outlined" 
                    value={payload.email}
                    onChange={handleChange('email')} color='secondary' />

                <FormControl sx={classes.myTextField} variant="outlined"  color='secondary' >
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

                <Button
                    variant="contained"
                    onClick={login}
                    color='primary'
                    sx={{ textTransform: 'none', paddingInlineStart:5,paddingInlineEnd: 5,
                    background:'radial-gradient(circle, rgba(41,119,135,1) 0%, rgba(6,31,129,1) 100%)', borderRadius:8}}>
                    <Typography sx={classes.myText}>
                        Log in
                    </Typography>
                </Button>
                <Typography sx={{fontSize: 12}}>Didn't have Account?
                <Link   onClick={handleNext} 
                sx={{fontSize: 12}}>Create Account</Link></Typography>
            </Card>
        </Grid>
    )
}
