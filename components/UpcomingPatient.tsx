import Image from 'next/image';
import Logo from '@/app/ui/logo2';
import { ArrowCircleDownIcon, ArrowDownIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';

const UpcomingPatient = () => {
  const day = "Monday";
  const date = "February 7, 2024";
  const meetingCount = 13;
  const userName = "ilyes";
  const dayNumber = format(new Date(date), 'd');

  return (
    <div className="p-4 rounded-lg flex justify-between items-center  -md">
      {/* Left Part - Date and Greeting */}
      <div className="grid grid-cols-2 w-full">
      <div className="text-black flex-none relative flex justify-center items-center">
  <div>
    <div className="text-3xl">{day}</div>
    <div className="text-6xl font-bold">{dayNumber}</div>
    
    <div className="mt-2">
      <p className="text-sm">
        Hi {userName}, you have <span className="text-gray-400">{meetingCount} meetings</span> today
      </p>
    </div>
  </div>
</div>

<div className="flex flex-col space-y-4 max-w-[350px] justify-center items-center">
  <div>
    <button className="flex justify-between items-center shadow bg-[#66cdcc] hover:bg-blue-600 text-black font-bold py-3 px-6 rounded-3xl w-full">
      <span>Upcoming Patient</span>
      <ArrowCircleDownIcon className="h-5 w-5" />
    </button>
  </div>
  <div className="bg-white rounded-3xl shadow p-6 w-full flex items-center space-x-4">
  {/* Partie de gauche pour la photo */}
  <div className="flex-none w-1/3">
    <Logo />
  </div>

  {/* Partie centrale pour le nom et la date d'inscription */}
  <div className="flex-1">
    <h3 className="text-lg font-semibold">Dean Ferrera</h3>
    <p className="text-gray-500">Patient since Jan, 2021</p>
  </div>

  {/* Partie de droite pour l'heure de rendez-vous */}
  <div className="flex-none w-1/3 text-right">
    <p>03:00 <ArrowNarrowRightIcon/> 03:30</p>
  </div>
</div>

</div>

</div></div>
  );
};

export default UpcomingPatient;
