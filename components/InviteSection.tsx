import React from 'react';
import Image from 'next/image'; // Assurez-vous d'avoir installé et configuré Next.js pour utiliser les images
import Logo from '@/app/ui/logo3';
import { ClipboardCopyIcon } from '@heroicons/react/solid';

const InviteSection = () => {


    
  return (
    <div className="mt-10 p-10 bg-white rounded-3xl flex items-center justify-center ml-4">
  <Logo />
  <div className="mr-4">
    
  </div>
  <div className="flex flex-col">
    <div className="text-center mb-2">
      <p className="text-gray-400"><strong className='text-black'>To invite</strong> someone to your room, share the link below.</p>
    </div>
    <div className="flex items-center">
      <input 
        type="text" 
        readOnly 
        value="yourclinic.doxy.me/drwelch" 
        className="p-2 border w-full text-center rounded-3xl"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} // Couleur de fond d'origine
      />
      <ClipboardCopyIcon className="ml-2 w-6 h-6 text-gray-500 cursor-pointer" />
    </div>
  </div>
</div>


  );
};

export default InviteSection;
