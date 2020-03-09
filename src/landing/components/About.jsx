import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    
    wrapper: {
        display: 'flex'
    },

    about: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },

    aboutHead: {
        color: 'rgb(34,177,76)'
    },

    aboutContent: {
        width: '50%'
    }


}))

export default function About() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <div className = {classes.about}>
                <h1>Andrew Goenner</h1>
                <div className = {classes.aboutContent}>
                    I have been interested in the idea of coding and in all things computer related since the 90s.  I have worked in website support for ISPs, SEO for web design companies, but I never had the opportunity to really learn how to code until I attended Lambda School.  Prior to attending Lambda, I was a stay-at-home dad and wrote two novels, self-publishing one of them, as once I latch onto a project, my tenacity is endless.  
                </div>
            </div>
        </Typography>
    )
}