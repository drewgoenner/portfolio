import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import { Landing } from './landing/Landing';
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: '#26242D',
        color: '#ffffff',
    }
}));

export const App = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
                <div id='App' className={classes.root}>
                    <Route exact path='/' component={Landing} />
                </div>
        </React.Fragment>
    );
};