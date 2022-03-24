import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuitem'>
    <div className="app__menuitem__head">
      <div className="app__menuitem__name">
        <p className='p__cormorant' style={{ color: '#dcca87' }}>{title}</p>
      </div>
      <div className='app__menuitem__dash' />
      <div className="app__menuitem__price">
        <p className='p__cormorant' >{price}</p>
      </div>
    </div>

    <div className="app__menuitem__sub">
      <p className="p__opensans" style={{ color: '#aaa' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
