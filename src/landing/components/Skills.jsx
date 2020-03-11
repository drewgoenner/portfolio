import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
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

    h1: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        justifyContent: 'center'
    },

    skills: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '0 0 5% 0'
    },

    languages: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3% 3%',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'column',
        margin: '0 1%',
        alignItems: 'center',
        border: '1px solid green',
        width: '16%'
        
    },

    libframe: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3% 3%',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'column',
        // margin: '0 2%',
        alignItems: 'center',
        border: '1px solid lightblue',
        width: '16%'
    },

    data: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3% 3%',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'column',
        margin: '0 1%',
        alignItems: 'center',
        border: '1px solid pink',
        width: '16%'
    },

    soft: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3% 3%',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'column',
        // margin: '0 2%',
        alignItems: 'center',
        border: '1px solid gray',
        width: '16%'
    },

    versioncon: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3% 3%',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'column',
        margin: '0 1%',
        alignItems: 'center',
        border: '1px solid yellow',
        width: '16%'

    },

    commcon: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '3% 3%',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'column',
        margin: '0 1% 0 0',
        alignItems: 'center',
        border: '1px solid purple',
        width: '16%'
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
            <h1 className = {classes.h1}> Class Skills (click a skill for more info)</h1>
            <div className = {classes.skills}>
                
                <div className = {classes.languages}>
                    <h3 className = {classes.langH2}>Languages</h3>
                    <HtmlModal />
                    <CSSModal />
                    <JavaScriptModal  />
                    <PythonModal  />
                </div>

                <div className = {classes.libframe}>
                    <h3 className = {classes.libH2}>Libraries/Frameworks</h3>
                    <ReactModal />
                    <ReduxModal />
                    <NodeModal />
                    <ExpressModal />
                    <SassModal />
                    <MaterialModal />
                </div>

                <div className = {classes.data}>
                    <h3 className = {classes.dataH2}>Databases</h3>
                    <SQLiteModal />
                    <PostGresModal />
                </div>

                <div className = {classes.soft}>
                    <h3 className = {classes.softH2}>Development</h3>
                    <OopModal />
                    <PairModal />
                </div>

                <div className = {classes.versioncon}>
                    <h3 className = {classes.controlH2}>Control</h3>
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
                    <h3 className = {classes.commH2}>Communication</h3>
                    <SlackModal />
                    <ZoomModal />
                </div>
            </div>
        </Typography>

    )
}