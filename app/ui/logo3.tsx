import React from 'react';
import logoImage from '../image/invite.jpg';

export default function Logo() {
  return (
    <img src={logoImage.src} alt="Logo" className="h-40 w-40" />
  );
}
