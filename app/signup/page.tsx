import Header from '@/components/Header';
import UpcomingPatient from '@/components/UpcomingPatient';
import PatientQueue from '@/components/PatientQueue';
import PatientStats from '@/components/PatientStats';
import InviteSection from '@/components/InviteSection';
import Detail from '@/components/Detail';
import 'tailwindcss/tailwind.css';

const Page = () => {
  return (
    <div className="flex flex-col h-screen bg-teal-100">
      <Header />
      <div className="flex-grow overflow-auto">
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left section - Date and Upcoming Patient */}
            <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow">
              {/* Date and greeting component here */}
              <UpcomingPatient />
            </div>

            {/* Middle section - Patient Queue and Patient Stats */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 gap-4">
                <PatientQueue />
                <PatientStats />
              </div>
            </div>

            {/* Right section - Detail view */}
            <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow">
              <Detail />
            </div>
          </div>
          
          {/* Bottom section - Invite */}
          <div className="mt-6">
            <InviteSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
