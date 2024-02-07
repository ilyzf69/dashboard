import Header from '@/components/Header';
import UpcomingPatient from '@/components/UpcomingPatient';
import PatientQueue from '@/components/PatientQueue';
import PatientStats from '@/components/PatientStats';
import InviteSection from '@/components/InviteSection';
import Detail from '@/components/Detail';
import 'tailwindcss/tailwind.css';

const Page = () => {
  return (
    <div className="flex h-screen" style={{ backgroundColor: '#a0eceb' }}>
      <div className="flex-1 overflow-auto my-8 mx-auto shadow-lg bg-white max-w-6xl rounded-3xl">
        <Header />
        <main className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            {/* Partie gauche */}
            <div className="md:col-span-2">
              <UpcomingPatient />
            </div>
            {/* Partie droite */}
            <div className="md:col-span-2 md:grid md:grid-cols-2 gap-4">
              <div>
                <PatientQueue />
              </div>
              <div>
                <PatientStats />
              </div>
              <div className="md:col-span-2 justify-center">
                <Detail />
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
