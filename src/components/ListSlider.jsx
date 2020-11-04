import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import CardList from './CardList';

import styles from '../css/listSlider.module.css';

function ListSlider({
  bikesIsChecked,
  standsIsChecked,
  bankingIsChecked,
  stations,
}) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  return (
    <div className={styles.container}>
      <Slider className={styles.slider} {...settings}>
        {stations
          .filter((station) => {
            if (bankingIsChecked === true) {
              if (station.banking === 'True') {
                return station;
              }
            } else {
              return station;
            }
            return '';
          })
          .filter((station) => {
            if (bikesIsChecked === true) {
              if (station.availableBikes > 0) {
                return station;
              }
            } else {
              return station;
            }
            return '';
          })
          .filter((station) => {
            if (standsIsChecked === true) {
              if (station.availableBikeStand > 0) {
                return station;
              }
            } else {
              return station;
            }
            return '';
          })
          .map((station) => {
            return <CardList key={station.id} {...station} />;
          })}
      </Slider>
    </div>
  );
}

ListSlider.propTypes = {
  stations: PropTypes.arrayOf(PropTypes.object).isRequired,
  bikesIsChecked: PropTypes.bool.isRequired,
  standsIsChecked: PropTypes.bool.isRequired,
  bankingIsChecked: PropTypes.bool.isRequired,
};

export default ListSlider;