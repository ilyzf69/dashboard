import React from 'react';
import logoImage from '../image/logo.jpg';

export default function Logo() {
  return (
    <img src={logoImage.src} alt="Logo" className="h-12 w-12" />
  );
}
