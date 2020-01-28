import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase } from '@material-ui/core';
import andrewicon from '../images/andrewicon.png'

const useStyles = makeStyles(theme => ({

    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        margin: '10px'
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
            {/* <Link href = '#' color = 'inherit' className = {classes.link} */}
        </Typography>
    )

    
}