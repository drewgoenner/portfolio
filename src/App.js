import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import { Landing } from './landing/Landing'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#26242D',
        color: '#ffffff',
    }
}));

export const App = () => {
    const classes = useStyles();
    return (
        <div id='App' className={classes.root}>
            <Route exact path='/' component={Landing} />
        </div>
    );
};