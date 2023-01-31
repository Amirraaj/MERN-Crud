import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;




const EditUser = () =>{
    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input  name='name'  id="my-input"/>
                {/* <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" /> */}
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                {/* <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" /> */}
                <Input name='username'  id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                {/* <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/> */}
                <Input  name='email' id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                {/* <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" /> */}
                <Input name='phone' id="my-input" />

            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" >Add User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser; 