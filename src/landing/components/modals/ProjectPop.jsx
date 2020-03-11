import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    outline: 'none'
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'lightgreen',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  button: {
      backgroundColor: 'lightgreen',
      height: '50px',
      marginLeft: '40%',
      
  },

  links: {
      display: 'flex',
      flexDirection: 'column'
  }
}));

export function ThunderModal() {
  const classes = useStyles();
 
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <button type="button" className = {classes.button} onClick={handleOpen}>
            ThunderBall Run
        </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">ThunderBall Run</h2>
          <p id="simple-modal-description">
            ThunderBall Run was a graphical traversal program I built with a team using Python and JavaScript.  I initially worked on the backend using Django to build and provide a map to our frontend team.  Once that was complete, I moved onto the front end, which was built in React, styling the movement interface and implementing the arrows to make the car move around the map.
          </p>
          <div className = {classes.links}>
          <a href = 'https://github.com/awesome-mud/CS-Build-Week-1/tree/master' target="_blank">Backend Repo</a>
          <a href = 'https://github.com/awesome-mud/Front-end/tree/master/thunderball' target ="_blank">Frontend Repo</a>
          <a href = 'https://thunderball-run.gettingonthe.net/' target='_blank'>Deployed Page</a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export function CelebModal() {
    const classes = useStyles();
   
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
          <button type="button" className = {classes.button} onClick={handleOpen}>
              Celebrity? Dead or Alive
          </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Celebrity? Dead or Alive</h2>
            <p id="simple-modal-description">
              Celebrity? Dead or Alive was a build week project I was a member of for Lambda.  My task was solely to work on the backend, and I built it out with Node.JS, Express, and Knex.  I completed my portion of the project with days to spare, allowing me time to help teammates as needed and make minor tweaks as requested by the rest of the team.
            </p>
            <div className = {classes.links}>
            <a href = 'https://github.com/Buildweek-Dead-Celebrities/Backend' target="_blank">Backend Repo</a>
            <a href = 'https://celeb-doa.netlify.com/' target='_blank'>Deployed Page</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  export function KanshaModal() {
    const classes = useStyles();
   
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
          <button type="button" className = {classes.button} onClick={handleOpen}>
              Kansha Rewards
          </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Kansha Rewards</h2>
            <p id="simple-modal-description">
              Kansha Rewards was a greenfield project I worked on with an amazing team of coders.  I initially started off by working on the backend, using Node.js, Express, and Knex.  Once that was complete, I moved on to the frontend, where I built out the landing page and made the site responsive using React and Material UI.  I also spent time creating the onboarding form and working on getting the reward modals set up and working.  This project proved so successful that it became a build-on project for the following labs team.  The live site includes the changes they have made to it, but the repo will point to our 1.1 version prior to deletion.
            </p>
            <div className = {classes.links}>
            <a href = 'https://github.com/drewgoenner/kansha-fe/tree/1.1' target="_blank">Frontend Repo</a>
            <a href = 'https://github.com/Lambda-School-Labs/kansha-be' target ="_blank">Backend Repo</a>
            <a href = 'https://kansharewards.com/' target='_blank'>Deployed Page</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

