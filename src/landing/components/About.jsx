import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Typography } from '@material-ui/core';
import profpic from '../images/TH.jpg'
import github from '../images/GitHub-Mark-Light-32px.png'
import linked from '../images/linked.png'

const useStyles = makeStyles(theme => ({
    
    wrapper: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        justifyContent: 'center'
    },

    about: {

        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '80%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    baseinfo: {
        display: 'flex',
        flexDirection: 'column',

    },

 
    aboutContent: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        width: '50%',
        padding: '5px',
        margin: '7% 2% 2% 5%',
        border: '1px solid green'
    },

    h1: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            textAlign: 'center'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        margin: '0 2%',
        width: '100%',
        borderBottom: '1px solid green'
    },

    h2: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        margin: '0 2%',
        width: '100%',
        borderBottom: '1px solid green'
    },

    h3: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            textAlign: 'center'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        margin: '0 2%',
        width: '100%',
        borderBottom: '1px solid green'
    },

    profpic: {

        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            border: 'none'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        width: '20%',
        borderRadius: '50%',
        margin: '2% 2% 2% 8%',
        
    },

    git: {
        margin: '2% 2% 0 0'
    },

    linked: {
        width: '40px',
        margin: '3% 0 0 0'
    },

    email: {
        color: 'lightblue'
    }


}))

export default function About() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <img className = {classes.profpic} src = {profpic} alt ='' />
            <div className = {classes.about}>
                <div className = {classes.baseinfo}>
                <h1 className = {classes.h1}>Name: Andrew Goenner</h1>
                <h2 className = {classes.h2}>Species: Tall Hobbit</h2>
                <h3 className = {classes.h3}>Alignment: Lawful Good</h3> 
                <h3 className = {classes.h3}>Character Class: Full Stack Developer</h3>
                <h3 className = {classes.h3}>Level: 1</h3>
                <h3 className = {classes.h3}>Home Territories: <a href='https://github.com/drewgoenner'target = '_blank'><img src = {github} className = {classes.git} /></a>
                <a href = 'https://www.linkedin.com/in/andrewgoenner' target = '_blank'><img src = {linked} className = {classes.linked} /></a>
                </h3>
                <h3 className = {classes.h3}>Send me a missive: <a href= 'mailto:drewgoenner@gmail.com' className = {classes.email}>via email</a></h3>
                
                </div>
                <div className = {classes.aboutContent}>
                    <h2>Back Story: </h2><h3>I have been interested in the idea of coding and in all things computer related since the 90s.  I have worked in website support for ISPs, SEO for web design companies, but I never had the opportunity to really learn how to code until I attended Lambda School.  Prior to attending Lambda, I was a stay-at-home dad and wrote two novels, self-publishing one of them, as once I latch onto a project, my tenacity is endless.  </h3>
                </div>
            </div>
        </Typography>
    )
}