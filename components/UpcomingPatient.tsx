import Image from 'next/image';
import Logo from '@/app/ui/logo2';
import { ArrowCircleDownIcon, ArrowDownIcon } from '@heroicons/react/solid';

import { format } from 'date-fns';

const UpcomingPatient = () => {
  // Suppose you have variables day, date, and meetingCount to display the information about meetings.
  const day = "Monday";
  const date = "February 7, 2024";
  const meetingCount = 13;
  const userName = "ilyes";
  const dayNumber = format(date, 'd');

  return (
    <div className=" p-4 rounded-lg flex justify-between items-center">
      {/* Left Part - Date and Greeting */}
      <div className="text-black">
  <div className="text-6xl font-bold">{dayNumber}</div>
  <div className="text-3xl">{day}</div>
  <div className="mt-2">
    <p className="text-sm">
      Hi {userName}, you have <span className="text-gray-400">{meetingCount} meetings</span> today
    </p>
  </div>
</div>
      
      {/* Partie Droite */}
      <div className="flex flex-col space-y-4" style={{ maxWidth: '350px' }}>
  <div>
    <button className="flex justify-between items-center shadow bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-3xl w-full">
      <span>Upcoming Patient</span>
      <ArrowCircleDownIcon className="h-5 w-5" />
    </button>
  </div>
  <div className="bg-white rounded-3xl shadow p-6 w-full">
    <div className="flex items-center space-x-4">
      <Logo />
      <div>
        <h3 className="text-lg font-semibold">Dean Ferrera</h3>
        <p className="text-gray-500">Patient since Jan, 2021</p>
      </div>
    </div>
    {/* Autres contenus ici */}
  </div>
</div>

</div>
  );
};

export default UpcomingPatient;
