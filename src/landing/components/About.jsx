import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';
import profpic from '../images/TH.jpg'

const useStyles = makeStyles(theme => ({
    
    wrapper: {
        display: 'flex'
    },

    about: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    baseinfo: {
        display: 'flex',
        flexDirection: 'column',

    },

 
    aboutContent: {
        width: '50%'
    },

    h1: {
        margin: '0 2%',
        width: '400px'
    },

    h2: {
        margin: '0 2%'
    },

    h3: {
        margin: '0 2%'
    },

    profpic: {
        width: "30%",
        borderRadius: '50%',
        margin: '2%'
    }


}))

export default function About() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <img className = {classes.profpic} src = {profpic} />
            <div className = {classes.about}>
                <div className = {classes.baseinfo}>
                <h1 className = {classes.h1}>Name: Andrew Goenner</h1>
                <h2 className = {classes.h2}>Race: Tall Hobbit</h2>
                <h3 className = {classes.h3}>Alignment: Lawful Good</h3> 
                <h3 className = {classes.h3}>Character Class: Full Stack Developer</h3>
                <h3 className = {classes.h3}>Level: 1</h3>
                </div>
                <div className = {classes.aboutContent}>
                    <b>Back Story: </b>I have been interested in the idea of coding and in all things computer related since the 90s.  I have worked in website support for ISPs, SEO for web design companies, but I never had the opportunity to really learn how to code until I attended Lambda School.  Prior to attending Lambda, I was a stay-at-home dad and wrote two novels, self-publishing one of them, as once I latch onto a project, my tenacity is endless.  
                </div>
            </div>
        </Typography>
    )
}