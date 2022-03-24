import React, { useRef } from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';


const gImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = useRef()

  const scroll = (dir) => {
    const { current } = scrollRef;

    if (dir === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }
  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery__content">
        <SubHeading title={'Instagram'} />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className="custom__button">View More</button>
      </div>

      <div className="app__gallery__images">
        <div className="app__gallery__images__container" ref={scrollRef}>
          {
            gImages.map((img) => (
              <div key={img} className="app__gallery__images__card flex__center">
                <img src={img} alt="gallery" />
                <BsInstagram className='gallery__image__icon' />
              </div>
            ))
          }
        </div>
        <div className="app__gallery__images__arrow">
          <BsArrowLeftShort className='gallery__arrow__icon' onClick={() => scroll("left")} />
          <BsArrowRightShort className='gallery__arrow__icon' onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
