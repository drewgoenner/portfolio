import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { PairModal } from './DataSoft'

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
    backgroundColor: 'purple',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  buttondiv: {
    width: '70%'
  },

  button: {
      backgroundColor: 'purple',
      margin: '5% 0',
      width: '100%'
  }
}));

export function SlackModal() {
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
    <div className = {classes.buttondiv}>
      <button type="button" className = {classes.button} onClick={handleOpen}>
        Slack
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Slack</h2>
          <p id="simple-modal-description">
            I am very proficient in Slack. We used this for all non-verbal communication during my time in Lambda. Very simple and easy to use. We often used in in conjunction with Zoom for asking questions during lectures.
          </p>
          <ZoomModal />
        </div>
      </Modal>
    </div>
  );
}

export function ZoomModal() {
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
    <div className = {classes.buttondiv}>
      <button type="button" className = {classes.button} onClick={handleOpen}>
        Zoom
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Zoom</h2>
          <p id="simple-modal-description">
            This is the video conferencing program I've used the most in the past year.  We used it for lectures, Pair Programming, and meetings with our team leads to see how we are doing.  I am quite skilled at using this program.
          </p>
          <SlackModal />
          <PairModal />
        </div>
      </Modal>
    </div>
  );
}

