import Image from 'next/image';
import Logo from '@/app/ui/logo2';
import { ChevronDownIcon } from '@heroicons/react/solid';

const UpcomingPatient = () => {
  // Suppose you have variables day, date, and meetingCount to display the information about meetings.
  const day = "Monday";
  const date = "February 7, 2024";
  const meetingCount = 13;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Partie Gauche */}
      <div>
        <div>
          <h2 className="text-xl font-semibold mb-2">{day}</h2>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">{date}</h2>
        </div>
        <div className="mt-4">
          <p>{`Hi [user], you have ${meetingCount} meetings today`}</p>
        </div>
      </div>
      
      {/* Partie Droite */}
      <div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mb-4">
    Upcoming Patient  
    <ChevronDownIcon className="h-5 w-5 ml-1" />
  </button>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4">
        <Logo />
          <div>
            <h3 className="text-lg font-semibold">Dean Ferrera</h3>
            <p className="text-gray-500">Patient since Jan, 2021</p>
          </div>
        </div>
        <div className="mt-4">
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default UpcomingPatient;
