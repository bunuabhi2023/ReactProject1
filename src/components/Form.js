import * as React from 'react';
import {useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Forgetpassword from './Forgetpassword';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
const[visible,setVisible]=useState(false)
const[state,Setstate]=useState({
    data:{
        email:'',
        password:''
    },
    requred:{
        email:false,
        password:false
    }
})

const onhandlePopup=()=>{
  setVisible(!visible)
}

const onhandleChange=(name,e)=>{
    debugger
    const {data,requred}=state;
    data[name]=e.target.value;
    Setstate({
        ...state,
        data,
        requred:{
           email:false,
           password:false
        }
    })
}

const isValidate=()=>{

debugger
    if(state.data.email==null || state.data.email==''){
    Setstate({
        ...state,
        requred:{
           email:true 
        }
    })
}
debugger
    if(state.data.password==null || state.data.password==''){
    Setstate({
        ...state,
        requred:{
           password:true 
        }
    })
}

}

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={visible}
        onClose={onhandlePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Forgetpassword/>
      </Modal>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        //form box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> 
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <TextField
              margin="normal"
              error={state.requred.email}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>onhandleChange('email',e)}
            />
            <TextField
              margin="normal"
              error={state.requred.password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>onhandleChange('password',e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={isValidate}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={onhandlePopup}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}