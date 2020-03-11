import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {  PairModal } from './DataSoft'
import { HtmlModal, PythonModal, JavaScriptModal } from './Languages'


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
    backgroundColor: 'orange',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  buttondiv: {
    width: '70%'
  },

  button: {
      backgroundColor: 'orange',
      margin: '5% 0',
      width: '100%'
  }
}));

export function VSCodeModal() {
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
        VSCode
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">VSCode</h2>
          <p id="simple-modal-description">
            I am extremely well-versed with VSCode.  It is what I used exclusively, up until I started learning Python, when I switched to Sublime.  I'm very proficient with it, use several handy extensions, and know just what I'm doing.  Most likely as a Front End Developer, this will be what I am writing the majority of my code in, unless my employer requires another program, which I will happily learn.
          </p>
          <HtmlModal />
          <JavaScriptModal />
          <PairModal />
        </div>
      </Modal>
    </div>
  );
}

export function SublimeModal() {
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
        Sublime
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Sublime</h2>
          <p id="simple-modal-description">
            Sublime is the editor I used when going through the Python material at Lambda.  It is straight-forward and extremely easy to use.
          </p>
          <PythonModal />
        </div>
      </Modal>
    </div>
  );
}

export function GitModal() {
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
        Git
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Git</h2>
          <p id="simple-modal-description">
            I am proficient in Git, having used it to create files, make commits, and push up to my GitHub account.  It, combined with my GitBash Terminal, bring me back to the glory days of DOS, in a way.
          </p>
          <GitHubModal />
          <GitBashModal />
        </div>
      </Modal>
    </div>
  );
}

export function GitBashModal() {
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
        GitBash
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">GitBash</h2>
          <p id="simple-modal-description">
            This is the terminal I used throughout the majority of my time at Lambda.  I am extremely proficient in it, though I know there are several commands I haven't yet had to use.
          </p>
          <GitHubModal />
          <GitModal />
        </div>
      </Modal>
    </div>
  );
}

export function GitHubModal() {
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
        GitHub
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">GitHub</h2>
          <p id="simple-modal-description">
            Where the magic happens. Those beautiful green squares as you push your projects to a repo, resolving merge conflicts, setting live with Netlify.  I have been using this for just shy of a year, and I'm confident to say I know it like the back of my hand, at least the basics.  I'm always interested in learning what new tricks this little site can offer me.  
          </p>
          <GitModal />
          <GitBashModal />
          <NetlifyModal />
        </div>
      </Modal>
    </div>
  );
}

export function ShellModal() {
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
        PowerShell
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Windows PowerShell</h2>
          <p id="simple-modal-description">
            Instead of GitBash, I used this terminal for all of my Python projects.  It worked in much the same way, but was easier to create virtual environments in for running my code.  
          </p>
          <PythonModal />
          <GitBashModal />
          <WindowsModal />
        </div>
      </Modal>
    </div>
  );
}

export function NetlifyModal() {
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
        Netlify
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Netlify</h2>
          <p id="simple-modal-description">
            I am proficient in pushing sites live to Netlify (this very Portfolio uses it).  It is extremely user friendly, and links easily with GitHub, making it a simple matter to set a master repo to live status.  
          </p>
          <GitHubModal />
        </div>
      </Modal>
    </div>
  );
}

export function WindowsModal() {
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
        Windows
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Windows</h2>
          <p id="simple-modal-description">
            This is the OS I've been using since Windows first launched.  I have used every version and am extremely familiar with the ins and outs of the program.
          </p>
          <ShellModal />
        </div>
      </Modal>
    </div>
  );
}