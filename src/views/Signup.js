import React, { useState }  from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

// import './css/login.css';

import { 
    Button,
    FormControl,
    InputLabel,
    Input, 
    FormHelperText, 
    Card, 
    Grid
    } from '@material-ui/core';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function Signup(){
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();

    
    // triggers the sign up request to the backend
    function sign_up() {
        // let user_info = {
        //     username : username,
        //     email : email,
        //     password : password,
        //     password2 : password2
        // };
        // console.log(user_info);

        // axios.post('/server_app/sign_up', user_info)
        // .then(response => {
        //     // sucessful response
        //     console.log("Response: ", response.data);
        // })
        // .catch(error => {
        //     console.error('Error: ', error);
        // });

        axios.get('https://nazim-django-server.herokuapp.com/hello')
        .then(response => {
            // sucessful response
            console.log("Response: ", response.data);
        })
        .catch(error => {
            console.error('Error: ', error);
        });

    }

    return(
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" 
        style={{ minHeight: '100vh' }}>
             <Grid item xs={6} >
                <Card style= {{padding: '5vh'}}>
                    <h2>Signup</h2>
                    <form>
                    <FormControl
                    onChange = { (event) => {  setUsername(event.target.value)  }}>
                        <InputLabel htmlFor="my-input">Username</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <br/>

                    <FormControl
                    onChange = { (event) => {  setEmail(event.target.value)  }}>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <br/>
                    <FormControl
                    onChange = { (event) => {  setPassword(event.target.value)  }}>
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input type="password" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <br/>
                    <FormControl
                    onChange = { (event) => {  setPassword2(event.target.value)  }}>
                        <InputLabel htmlFor="my-input">Retype Password</InputLabel>
                        <Input type="password" id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <br/>
                
                    </form>
                    <br/>
                    <Button variant="contained" onClick = { (event) => {sign_up()}} color="primary">Submit</Button>
                </Card>

            </Grid>
        </Grid>
    )
}
export default Signup;