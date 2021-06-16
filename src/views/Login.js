import React, { useState }  from "react";

// import './css/login.css';

import { 
    Button,
    FormControl,
    InputLabel,
    Input, 
    Card, 
    Grid
    } from '@material-ui/core';


function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return(
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" 
        style={{ minHeight: '100vh' }}>
             <Grid item xs={6} >
                <Card style= {{padding: '5vh'}}>
                    <h2>Login</h2>
                    <form>
                    <FormControl
                    onChange = { (event) => {  setUsername(event.target.value)  }}>
                        <InputLabel htmlFor="my-input">Username</InputLabel>
                        <Input id="my-input" 
                         />
                    </FormControl>
                    <br/>
                    <FormControl
                    onChange = { (event) => {  setPassword(event.target.value)  }}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input type="password" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <br/>
                
                    </form>
                    <br/>
                    <Button variant="contained" color="primary">Submit</Button>
                </Card>

            </Grid>
        </Grid>
    )
}
export default Login;