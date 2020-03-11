import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {JavaScriptModal, CSSModal} from './Languages'


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
    backgroundColor: 'lightblue',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  buttondiv: {
    width: '70%'
  },

  button: {
      backgroundColor: 'lightblue',
      margin: '5% 0',
      width: '100%'
  }
}));

export function ReactModal() {
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
        React
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">React</h2>
          <p id="simple-modal-description">
            React is what we spent most of our time on in Lambda, when it came to JavaScript.  I am able to build a full site using React (such as this Portfolio), as well as use Redux and Context for handling state.
          </p>
          <JavaScriptModal />
          <ReduxModal />
          <MaterialModal />
        </div>
      </Modal>
    </div>
  );
}

export function ReduxModal() {
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
        Redux
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Redux</h2>
          <p id="simple-modal-description">
            I didn't get into Redux until close to the end of my time learning React. However, I did use it on several projects, including build week projects and our Labs project to handle state.  I enjoy Redux and between the two, I probably prefer it over Context.
          </p>
          <ReactModal />
        </div>
      </Modal>
    </div>
  );
}

export function NodeModal() {
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
        Node.JS
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Node.JS</h2>
          <p id="simple-modal-description">
            I am proficient with Node, as it is a natural extension of Javascript for handling the backend.  It is intuitive and I enjoyed using it on several projects.  Combined with Knex and Express, it is extremely intuitive and coder-friendly.
          </p>
          <JavaScriptModal />
          <KnexModal />
          <ExpressModal />
        </div>
      </Modal>
    </div>
  );
}

export function ExpressModal() {
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
        Express
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Express</h2>
          <p id="simple-modal-description">
            I use Express in conjunction with Node.JS.  I am fairly proficient in it, and what I can't do offhand, I can very easily learn by doing.
          </p>
          <NodeModal />
          <KnexModal />
        </div>
      </Modal>
    </div>
  );
}

export function KnexModal() {
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
          Knex
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Knex</h2>
            <p id="simple-modal-description">
              Knex, used to tie everything together. This is an extremely useful query builder that I am proficient in. Very quick, simple, and easy to use.
            </p>
            <NodeModal />
            <ExpressModal />
          </div>
        </Modal>
      </div>
    );
  }

export function SassModal() {
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
          LESS/SASS
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">LESS/SASS</h2>
            <p id="simple-modal-description">
              I use LESS/SASS when building HTML pages or using CSS.  I generally prefer to build React pages and use libraries such as Material UI, but that particular library allows me to keep up on my CSS anyway, and I haven't let my skills wither.
            </p>
            <CSSModal />
          </div>
        </Modal>
      </div>
    );
  }

  export function MaterialModal() {
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
          Material UI
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Material UI</h2>
            <p id="simple-modal-description">
              I started using Material UI on a labs project for Lambda to style our project.  The docs are a slog to go through and while they are extremely counterintuitive, once you get the feel for the styling library, it is extremely intuitive.  MakeStyles allows you to use CSS instructions to style pages, and the built-in options such as modals and nav bars come in extremely handy.  Steep learning curve, but worth picking up.
            </p>
            <ReactModal />
            <CSSModal />
          </div>
        </Modal>
      </div>
    );
  }