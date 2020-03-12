import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        borderTop: '2px solid green'
    },

    nav: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'row'
    },

    tabs: {
        margin: '0 10px',
        textDecoration: 'none',
        color: 'white',   
    }
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <Typography className = {classes.wrapper}>
            <div className = {classes.nav}>
                <a href = '#' className = {classes.tabs}>Home</a>
                <a href = '#skills' className = {classes.tabs}>Class Skills</a>
                <a href = '#projects' className = {classes.tabs}>Past Adventures</a>
            </div>
        </Typography>
    )
}