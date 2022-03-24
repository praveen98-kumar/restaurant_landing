import React from 'react';
import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu__title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu__menu">
      <div className="app__specialMenu__menu__wine flex__center">
        <p className='app__specialMenu__menu__heading'>Wind & Beer</p>
        <div className="app__specialMenu__menu__items">
          {
            data.wines.map((item, index) => (
              <MenuItem key={item.title + index} price={item.price} title={item.title} tags={item.tags} />
            ))
          }
        </div>
      </div>

      <div className='app__specialMenu__menu__img'>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu__menu__cocktails flex__center">
        <p className='app__specialMenu__menu__heading'>Cocktails</p>
        <div className="app__specialMenu__menu__items">
          {
            data.cocktails.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))
          }
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div >
);

export default SpecialMenu;
