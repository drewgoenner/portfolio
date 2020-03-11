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
        flexDirection: 'column',
        alignItems: 'center'
    },

    aboutHead: {
        color: 'rgb(34,177,76)'
    },

    aboutContent: {
        width: '50%'
    },

    h1: {
        margin: '0'
    },

    h3: {
        margin: '0 0 1% 0'
    },

    profpic: {
        borderRadius: '50%'
    }


}))

export default function About() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <div className = {classes.about}>
                <img className = {classes.profpic} src = {profpic} />
                <h1 className = {classes.h1}>Name: Andrew Goenner</h1>
                <h3 className = {classes.h3}>Character Class: Full Stack Developer</h3>
                <div className = {classes.aboutContent}>
                    <b>Back Story: </b>I have been interested in the idea of coding and in all things computer related since the 90s.  I have worked in website support for ISPs, SEO for web design companies, but I never had the opportunity to really learn how to code until I attended Lambda School.  Prior to attending Lambda, I was a stay-at-home dad and wrote two novels, self-publishing one of them, as once I latch onto a project, my tenacity is endless.  
                </div>
            </div>
        </Typography>
    )
}