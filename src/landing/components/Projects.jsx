import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import thunder from '../images/thunderballrun.png';
import doa from '../images/celebrity.png';
import kansha from '../images/kansha.png';
import { ThunderModal, CelebModal, KanshaModal } from './modals/ProjectPop'


const useStyles = makeStyles(theme => ({
    wrapper: {
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
    }
}))

export default function MyCarousel() {
    const classes = useStyles()
    return (
        <div className = {classes.wrapper}>
            <h1 className = {classes.h1}>Past Adventures</h1>
            <Carousel arrows>
                <div className = {classes.projcont}>
                <img src={thunder} className = {classes.image} alt='ThunderBall Run' />
                <ThunderModal />
                </div>
                <div className = {classes.projcont}>
                <img src={doa} className = {classes.image} alt="Celebrity Dead or Alive"/>
                <CelebModal />
                </div>
                <div className = {classes.projcont}>
                <img src={kansha} className = {classes.image} alt = 'Kansha Rewards'/>
                <KanshaModal />
                </div>
            </Carousel>
        </div>
    )

}


// class MyCarousel extends React.Component {
    
//     constructor() {
 
//       super()
//       this.state = {
//         value: 0,
//         slides: [
//           (<img src={thunder} />),
//           (<img src={doa} />),
//           (<img src={kansha} />),
//         ],
//         thumbnails: [
//           (<img src={thunthumb} />),
//           (<img src={doathumb} />),
//           (<img src={kanshathumb} />),
//         ],
//       }
//       this.onchange = this.onchange.bind(this);
//     }
  
  
//     onchange(value) {
//       this.setState({ value });
//     }
  
//     render() {
//       return (
//       <div>
//         <Carousel
//           value={this.state.value}
//           slides={this.state.slides}
//           onChange={this.onchange}
//         />
//         <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
//       </div>
//       );
//     }
//   }

//   export default MyCarousel