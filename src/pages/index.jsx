import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './index.scss'
import imgOne from '../../src/icon/slider0.jpg';
import imgTwo from '../../src/icon/slider1.jpg';
import imgThree  from '../../src/icon/slider2.jpg';
import  SliderPoster from './slider'
class Home extends Component {

    state={
        poster:[imgOne,imgTwo,imgThree]
    }

    render() {
       const {poster}= this.state;
        return(
            <div className="slider">
                <div className="slider-title">轮播图</div>
                <SliderPoster data={poster}/>
            </div>

        )
    }

}
Home.propTypes = {};
export default Home;