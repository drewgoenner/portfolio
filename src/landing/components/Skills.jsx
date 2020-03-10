import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase, Button } from '@material-ui/core';
import { HtmlModal, CSSModal, JavaScriptModal, PythonModal } from './modals/Languages'
import { ReactModal, ReduxModal, NodeModal, ExpressModal, SassModal, MaterialModal } from './modals/LibFrame'

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center'
    },

    skills: {
        display: 'flex',
        flexDirection: 'row'
    },

    languages: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 10%'
        
    },

    libfram: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 10%'
    },

    h2: {
        margin: '0'
    }


}))

export default function Skills() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <h1> My Skills (click for more information)</h1>
            <div className = {classes.skills}>
                
                <div className = {classes.languages}>
                    <h2 className = {classes.h2} color = green>Languages</h2>
                    <HtmlModal />
                    <CSSModal />
                    <JavaScriptModal  />
                    <PythonModal  />
                </div>

                <div className = {classes.libframe}>
                    <h2 className = {classes.h2}>Libraries/Frameworks</h2>
                    <ReactModal />
                    <ReduxModal />
                    <NodeModal />
                    <ExpressModal />
                    <SassModal />
                    <MaterialModal />

                </div>
            </div>
        </Typography>

    )
}