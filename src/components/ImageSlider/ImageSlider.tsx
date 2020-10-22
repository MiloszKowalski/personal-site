import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';

import { ImageModalContext } from 'contexts/ImageModalContext';

import { ReactComponent as ArrowIcon } from 'components/svg/icons/ArrowIcon.svg';

import throttleEventHandler from 'utils/throttleEventHandler';
import './ImageSlider.scss';

enum Direction {
  left = 'left',
  right = 'right',
  none = 'none'
}

type Props = {
  images?: string[]
}

const ImageSlider: React.FC<Props> = ({ images }) => {
  const [initialTouchOffset, setInitialTouchOffset] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(Direction.none);

  const sliderImage = useRef<HTMLDivElement>(null);
  const imageSlider = useRef<HTMLDivElement>(null);

  const { openImageModal, currentImageUri, currentOffset,
    setImageSliderOffset, setCurrentImage } = useContext(ImageModalContext);

  function getSliderImageWidth() {
    if(sliderImage.current === null) return 0;
    return sliderImage.current.getBoundingClientRect().width;
  }

  const navigateToSlideOfIndex = useCallback((index: number) => {
    if(images === undefined) return;
    const image = images[index];
    setCurrentImage(image);
    setImageSliderOffset(getSliderImageWidth() * index * -1);
  }, [images, setCurrentImage, setImageSliderOffset]);

  const getCurrentSlideIndex = useCallback(() => {
    if(images === undefined) return 0;
    return images?.findIndex(x => x === currentImageUri);
  }, [currentImageUri, images]);

  const navigateToSlide = useCallback((image: string) => {
    if(images === undefined) return;
    const indexOfImage = images.findIndex(x => x === image);
    navigateToSlideOfIndex(indexOfImage);
  }, [images, navigateToSlideOfIndex]);

  const swipe = useCallback((direction: Direction) => {
    if(images === undefined) return;
    const indexOfCurrent = images?.findIndex(x => x === currentImageUri);
    if(indexOfCurrent === undefined) return;
    let newImageIndex = 0;
    if(direction === Direction.left) {
      newImageIndex = (indexOfCurrent + 1) % images.length;
    } else {
      newImageIndex = (indexOfCurrent - 1 + images.length) % images.length;
    }

    navigateToSlide(images[newImageIndex]);
  }, [images, navigateToSlide, currentImageUri]);

  const swipeLeft = useCallback(() => {
    swipe(Direction.left);
  }, [swipe]);

  const swipeRight = useCallback(() => {
    swipe(Direction.right);
  }, [swipe]);

  useEffect(() => {
    setCurrentImage(images?.[0] || '');
  }, [images, setCurrentImage]);

  useEffect(() => {
    const handleOnTouchDown = (e: TouchEvent) => {
      const offset = e.touches[0].clientX;
      setInitialTouchOffset(offset);
      setSwipeDirection(Direction.none);
    };

    const handleOnTouchMove = (e: TouchEvent) => {
      if(e.touches[0].clientX > initialTouchOffset) {
        setSwipeDirection(Direction.right);
      } else if (e.touches[0].clientX < initialTouchOffset) {
        setSwipeDirection(Direction.left);
      }
    };

    const handleOnTouchUp = (e: TouchEvent) => {
      if(images === undefined) return;
      if(imageSlider.current === null) return;

      if(swipeDirection === Direction.left) {
        swipeLeft();
      } else if (swipeDirection === Direction.right) {
        swipeRight();
      }
    };

    const handleWindowResize = () => {
        throttleEventHandler(1000, navigateToSlideOfIndex(getCurrentSlideIndex()));
    }

    // Fix state persisting between projects
    if(currentImageUri === images?.[0]) {
      navigateToSlideOfIndex(0);
    }

    const slider = imageSlider.current;
    if(slider === null) return;
    slider.addEventListener('touchstart', handleOnTouchDown);
    slider.addEventListener('touchmove', handleOnTouchMove, {passive: true});
    slider.addEventListener('touchend', handleOnTouchUp);
    window.addEventListener('resize', handleWindowResize, {passive: true});

    return () => {
      if(slider === null) return;
      slider.removeEventListener('touchstart', handleOnTouchDown);
      slider.removeEventListener('touchmove', handleOnTouchMove);
      slider.removeEventListener('touchend', handleOnTouchUp);
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [currentImageUri, images, initialTouchOffset, swipeDirection,
    swipeLeft, swipeRight, navigateToSlideOfIndex, getCurrentSlideIndex, setCurrentImage]);

  return (
    <div className="slider-wrapper" >
      <div className="pictures-slider" ref={ imageSlider }
      style={{transform: `translateX(${ currentOffset }px)`}}>
        { images?.map(image => (
          <div onClick={ () => openImageModal(image, images) }
            key={ image } className="slider-image" ref={ sliderImage }
            style={{ backgroundImage: `url(${image})`}}></div>
        ))}
      </div>
      <div onClick={ swipeRight } className="slider-arrow left"><ArrowIcon /></div>
      <div onClick={ swipeLeft } className="slider-arrow right"><ArrowIcon /></div>
      <div className="dots-label">
        { images?.map(image => (
            <div key={ image } onClick={() => navigateToSlide(image)} className={`slider-dot
              ${image === currentImageUri ? 'active' : ''}`}></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider;