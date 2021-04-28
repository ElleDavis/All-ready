import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>What style are you going for?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              {/* Makes Cards Link */}
            
          </ul>
          {/* Makes card links */}
          <ul className='cards__items'>
            <CardItem
              // src=''
              text='Whats Trending Now!'
              label='Hipster'
              path='/services'
            />
            <CardItem
              // src='./images/img-19.jpg'
              text='This Seasons '
              label='Spring'
              path='/products'
            />
            <CardItem
              // src='./images/img-16.jpg'
              text='Sign-Up'
              label='Sign-Up'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;