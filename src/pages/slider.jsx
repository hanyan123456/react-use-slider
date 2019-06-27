import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './slider.css';

const PosterSlide = ({ data }) => {
    const settings = {
        dots: true,
        autoplay: true,
        className: 'posterSlide',
        dotsClass: 'posterSlide__dots'
    };

    return (
        <Slider {...settings} >
            {
                data.map(item => (
                    <div key={item}>
                        <img className="posterSlide__image" src={item} alt=""/>
                    </div>
                ))
            }
        </Slider>
    );
};

PosterSlide.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PosterSlide;
