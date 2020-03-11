import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ReactModal, MaterialModal } from './LibFrame';
import { OopModal } from './DataSoft'
import { SublimeModal, VSCodeModal, ShellModal } from './VersionCon'


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
    padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: 300
            
        },
        [theme.breakpoints.up('md')]: {
            
        },
        [theme.breakpoints.up('lg')]: {
            
        },
    position: 'absolute',
    width: 400,
    backgroundColor: 'green',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  buttondiv: {
    width: '70%'
  },

  button: {
      backgroundColor: 'green',
      margin: '5% 0',
      width: '100%',
  }
}));

export function HtmlModal() {
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
        HTML5
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">HTML 5</h2>
          <p id="simple-modal-description">
            I'd spent some time learning HTML as an amateur back in the late 90s/early 80s, but it wasn't until I joined Lambda School that I really did a deep dive into it.  I quickly grew proficient with HTML and, though I prefer to built React webpages, I keep my HTML skills fresh.
          </p>
          <CSSModal />
          <VSCodeModal />
        </div>
      </Modal>
    </div>
  );
}

export function CSSModal() {
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
        CSS3
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">CSS3</h2>
          <p id="simple-modal-description">
            We learned CSS in conjunction with HTML, the two were tied together at every turn.  From flexbox to block, setting backgrounds to building nav bars, I can do it all.  With React webpages, I use Material-UI quite a bit, which keeps me on my toes, CSS-wise.
          </p>
          <HtmlModal />
          <MaterialModal />
        </div>
      </Modal>
    </div>
  );
}

export function JavaScriptModal() {
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
        JavaScript
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">JavaScript</h2>
          <p id="simple-modal-description">
            I am extremely proficient in JavaScript, especially when it comes to React.  We used this for the vast majority of our time in Lambda for both front end and back end.  Nearly every project I've worked on after we moved on from HTML involves JavaScript (and React)
          </p>
          <ReactModal />
          <OopModal />
          <VSCodeModal />
        </div>
      </Modal>
    </div>
  );
}

export function PythonModal() {
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
        Python
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Python</h2>
          <p id="simple-modal-description">
            While I would not say I am fully proficient in Python, learning it enhanced my problem solving skills, and what I don't know I can research and learn.  
          </p>
          <OopModal />
          <SublimeModal />
          <ShellModal />
        </div>
      </Modal>
    </div>
  );
}