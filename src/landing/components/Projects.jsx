import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import thunder from '../images/thunderballrun.png';
import doa from '../images/celebrity.png';
import kansha from '../images/kansha.png';
import { ThunderModal, CelebModal, KanshaModal } from './modals/ProjectPop'


const useStyles = makeStyles(theme => ({
    wrapper: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
        display: 'flex',
        flexDirection: 'column',
       
    },

    h1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    projcont: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    },
    
    image: {
        width: '100%',
        border: '1px solid green'
    },

    button: {
        background: 'lightgreen',
        borderRadius: '0',
        margin: '0 0 0 4%',
        height: '100%',
        textDecoration: 'none'
    },

    buttonDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}))

export default function MyCarousel() {
    const classes = useStyles()
    return (
        <div className = {classes.wrapper} a id = 'projects'>
            <h1 className = {classes.h1}>Past Adventures (Projects)</h1>
            <Carousel arrows>
                <div className = {classes.projcont}>
                <img src={thunder} className = {classes.image} alt='ThunderBall Run' />
                <div className = {classes.buttonDiv}>
                <ThunderModal />
                <a href = 'https://thunderball-run.gettingonthe.net/' target = '_blank'><button className = {classes.button}>Deployed Site</button></a>
                <a href = 'https://github.com/awesome-mud/CS-Build-Week-1/tree/master' target = '_blank'><button className = {classes.button}>Backend Repo</button></a>
                <a href = 'https://github.com/awesome-mud/Front-end/tree/master/thunderball' target = '_blank'><button className = {classes.button}>Frontend Repo</button></a>

                </div>
                </div>
                <div className = {classes.projcont}>
                <img src={doa} className = {classes.image} alt="Celebrity Dead or Alive"/>
                <div className = {classes.buttonDiv}>
                <CelebModal />
                <a href = 'https://celeb-doa.netlify.com/' target = '_blank'><button className = {classes.button}>Deployed Site</button></a>
                <a href = 'https://github.com/Buildweek-Dead-Celebrities/Backend' target = '_blank'><button className = {classes.button}>Backend Repo</button></a>
                </div>
                </div>
                <div className = {classes.projcont}>
                <img src={kansha} className = {classes.image} alt = 'Kansha Rewards'/>
                <div className = {classes.buttonDiv}>
                <KanshaModal />
                <a href = 'https://kansharewards.com/' target = '_blank'><button className = {classes.button}>Deployed Site</button></a>
                <a href = 'https://github.com/Lambda-School-Labs/kansha-be' target = '_blank'><button className = {classes.button}>Backend Repo</button></a>
                <a href = 'https://github.com/drewgoenner/kansha-fe/tree/1.1' target = '_blank'><button className = {classes.button}>Frontend Repo</button></a>
                </div>
                </div>
            </Carousel>
        </div>
    )

}


