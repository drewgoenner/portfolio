import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography, ButtonBase, Button } from '@material-ui/core';
import { HtmlModal, CSSModal, JavaScriptModal, PythonModal } from './modals/Languages'
import { ReactModal, ReduxModal, NodeModal, ExpressModal, SassModal, MaterialModal } from './modals/LibFrame'
import { SQLiteModal, PostGresModal, OopModal, PairModal } from './modals/DataSoft'
import { GitModal, VSCodeModal, SublimeModal, GitBashModal, GitHubModal, ShellModal, NetlifyModal, WindowsModal} from './modals/VersionCon'
import { SlackModal, ZoomModal } from './modals/Comm'

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center'
    },

    skills: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    languages: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 2%',
        alignItems: 'center'
        
    },

    libframe: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 2%',
        alignItems: 'center'
    },

    datasoft: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 2%',
        alignItems: 'center'
    },

    versioncon: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 2%',
        alignItems: 'center'

    },

    commcon: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 2%',
        alignItems: 'center'
    },

    langH2: {
        margin: '0',
        color: 'green'
    },

    libH2: {
        margin: '0',
        color: 'lightblue'
    },

    dataH2: {
        margin: '0',
        color: 'pink',
    },

    softH2: {
        margin: '0',
        color: 'gray'
    },

    controlH2: {
        margin: '0',
        color: 'yellow'
    },

    commH2: {
        margin: '0',
        color: 'purple'
    }


}))

export default function Skills() {
    const classes = useStyles();

    return (
        <Typography className = {classes.wrapper}>
            <h1> My Skills (click for more information)</h1>
            <div className = {classes.skills}>
                
                <div className = {classes.languages}>
                    <h2 className = {classes.langH2}>Languages</h2>
                    <HtmlModal />
                    <CSSModal />
                    <JavaScriptModal  />
                    <PythonModal  />
                </div>

                <div className = {classes.libframe}>
                    <h2 className = {classes.libH2}>Libraries/Frameworks</h2>
                    <ReactModal />
                    <ReduxModal />
                    <NodeModal />
                    <ExpressModal />
                    <SassModal />
                    <MaterialModal />
                </div>

                <div className = {classes.datasoft}>
                    <h2 className = {classes.dataH2}>Databases</h2>
                    <SQLiteModal />
                    <PostGresModal />
                </div>

                <div className = {classes.datasoft}>
                    <h2 className = {classes.softH2}>Development</h2>
                    <OopModal />
                    <PairModal />
                </div>

                <div className = {classes.versioncon}>
                    <h2 className = {classes.controlH2}>Control</h2>
                    <VSCodeModal />
                    <SublimeModal />
                    <GitModal />
                    <GitBashModal />
                    <GitHubModal />
                    <ShellModal />
                    <NetlifyModal />
                    <WindowsModal />
                </div>

                <div className = {classes.commcon}>
                    <h2 className = {classes.commH2}>Communication</h2>
                    <SlackModal />
                    <ZoomModal />
                </div>
            </div>
        </Typography>

    )
}