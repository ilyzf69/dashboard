import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Detail = () => {
  return (
    <div className="flex rounded-lg p-4 items-center justify-end text-blue-500">
      <span className="text-black mr-1"><strong>More</strong></span>
      <ChevronDownIcon className="w-5 h-5" />
    </div>
  );
};

export default Detail;
