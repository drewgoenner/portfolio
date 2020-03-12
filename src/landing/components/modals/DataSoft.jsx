import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { NodeModal, } from './LibFrame';
import { JavaScriptModal, PythonModal} from './Languages';
import {VSCodeModal } from './VersionCon';
import {ZoomModal } from './Comm';


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
  dataPaper: {
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
    backgroundColor: 'pink',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  softPaper: {
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
    backgroundColor: 'gray',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  buttondiv: {
    width: '70%'
  },

  dataButton: {
      backgroundColor: 'pink',
      margin: '5% 0',
      width: '100%'
  },

  softButton: {
    backgroundColor: 'gray',
    margin: '5% 0',
    width: '100%'
},
}));

export function SQLiteModal() {
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
      <button type="button" className = {classes.dataButton} onClick={handleOpen}>
        SQLite
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.dataPaper}>
          <h2 id="simple-modal-title">SQLite</h2>
          <p id="simple-modal-description">
            For simple backend design, SQLite, does the job easily enough.  It's simple to use, and it is easy to become proficient in.  For meatier backend, I use PostgreSQL
          </p>
          <PostGresModal />
          <NodeModal /> 
        </div>
      </Modal>
    </div>
  );
}

export function PostGresModal() {
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
      <button type="button" className = {classes.dataButton} onClick={handleOpen}>
        PostGreSQL
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.dataPaper}>
          <h2 id="simple-modal-title">PostGreSQL</h2>
          <p id="simple-modal-description">
            PostGreSQL, the beefier SQL cousin of SQLite.  This is much more useful, especially for larger projects.  I used this quite a bit when I'd moved on from simple backend design.  While I would say I am somewhat proficient in its use, I'm still always learning more about it.
          </p>
          <SQLiteModal />
          <NodeModal />
        </div>
      </Modal>
    </div>
  );
}

export function OopModal() {
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
      <button type="button" className = {classes.softButton} onClick={handleOpen}>
        OOP
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.softPaper}>
          <h2 id="simple-modal-title">Object Oriented Programming</h2>
          <p id="simple-modal-description">
            I first used OOP in JavaScript, making objects, classes, etc.  Then we picked it up again in Python.  Needless to say, I am quite well-versed in its uses, and am confident I can make good use of this knowledge in any position I end up in.
          </p>
          <JavaScriptModal />
          <PythonModal />
        </div>
      </Modal>
    </div>
  );
}

export function PairModal() {
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
      <button type="button" className = {classes.softButton} onClick={handleOpen}>
        Pair Programming
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.softPaper}>
          <h2 id="simple-modal-title">Pair Programming</h2>
          <p id="simple-modal-description">
            Aside from the ability to code itself, this skill is quite probably one of the most important ones I learned from Lambda.  I am able to pair program with someone effectively, efficiently, and enjoyably.  I can give advice when I am not the one actively coding, or take advice when I'm the one scrambling to write up functions.  I am also able to use VSCode Live Share, allowing my partner or myself to work on multiple components at once.   
          </p>
          <VSCodeModal />
          <ZoomModal />
        </div>
      </Modal>
    </div>
  );
}