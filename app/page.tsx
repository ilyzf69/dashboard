

import Header from '@/components/Header';
import UpcomingPatient from '@/components/UpcomingPatient';
import PatientQueue from '@/components/PatientQueue';
import PatientStats from '@/components/PatientStats';
import InviteSection from '@/components/InviteSection';
import 'tailwindcss/tailwind.css';

const Page = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UpcomingPatient />
            <div className="grid md:grid-cols-2 gap-4">
  <div className="md:col-span-1">
    <PatientQueue />
  </div>
  <div className="md:col-span-1">
    <PatientStats />
  </div>
</div>

          </div>
          <InviteSection />
        </main>
      </div>
    </div>
  );
};

export default Page;
