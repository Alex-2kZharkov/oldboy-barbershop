import React, { useState, useEffect, ReactElement } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

export const ScrollButton = (): ReactElement | null => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const buttonStyles: React.CSSProperties = {
    position: 'fixed',
    bottom: 20,
    left: 20,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'rgba(19,19,19,0.5)',
    backgroundImage: 'url(/sites/all/themes/oldboy8/dist/./img/icons/scroll-up.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '24px 24px',
    border: '2px solid #d6a354',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'opacity 0.5s ease-out',
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? 'auto' : 'none',
  };

  return (
    <button className="up-button" id="up-button" type = "button" onClick={scrollToTop} style={buttonStyles}>
      <BiArrowToTop size={30} color="white" />
    </button>
  );
};
