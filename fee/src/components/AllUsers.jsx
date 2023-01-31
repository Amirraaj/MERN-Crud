import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
// import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;



const AllUsers = () =>{
    return(
        <StyledTable>
        <TableHead>
            <THead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </THead>
        </TableHead>
        <TableBody>
            {/* {users.map((user) => ( */}
                <TRow >
                    <TableCell>1</TableCell> {/* change it to user.id to use JSON Server */}
                    <TableCell>Amir</TableCell>
                    <TableCell>Raj</TableCell>
                    <TableCell>abc@yopmail.com</TableCell>
                    <TableCell>989888989</TableCell>
                    <TableCell>
                        <Button color="primary" variant="contained" style={{marginRight:10}} >Edit</Button> {/* change it to user.id to use JSON Server */}
                        <Button color="secondary" variant="contained" >Delete</Button> {/* change it to user.id to use JSON Server */}
                    </TableCell>
                </TRow>
            {/* ))} */}
        </TableBody>
    </StyledTable>
    )
}

export default AllUsers; 