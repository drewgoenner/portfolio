import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';
import andrewicon from '../images/andrewicon.png'

const useStyles = makeStyles(theme => ({

    wrapper: {

        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        justifyContent: 'space-between',
        width: '99%',
        margin: '10px',
        borderBottom: '2px solid green'
    },

    link: {
        fontSize: '16px',
        padding: '10px'
    },

    image: {
        width: '100px'
    },

    img: {
        display: 'flex',
        margin: '0',
        width: '70%',
    },

    left: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    right: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    middle: {
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
        alignItems: 'flex-end'
    },

    tabs: {
        margin: '0 10px',
        textDecoration: 'none',
        color: 'white',
       
        
    }

    

}));

export default function Nav() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <div className = {classes.left}>
                <Link href = '#' color = 'inherit'>
                    <ButtonBase className = {classes.image}>
                        <img className = {classes.img} alt = 'Andrew' src = {andrewicon} />
                    </ButtonBase>
                </Link>
                Andrew Goenner
            </div>
            <div className = {classes.middle}>
                <a href = '#' className = {classes.tabs}>Home</a>
                <a href = '#skills' className = {classes.tabs}>Class Skills</a>
                <a href = '#projects' className = {classes.tabs}>Past Adventures</a>
            </div>
            <div className = {classes.right}>
                
                <h2 className = {classes.tabs}>Computers & Coders</h2>
            </div>
        </Typography>
    )

    
}