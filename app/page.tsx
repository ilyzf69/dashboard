import Header from '@/components/Header';
import UpcomingPatient from '@/components/UpcomingPatient';
import PatientQueue from '@/components/PatientQueue';
import PatientStats from '@/components/PatientStats';
import InviteSection from '@/components/InviteSection';
import Detail from '@/components/Detail';
import 'tailwindcss/tailwind.css';

const Page = () => {
  return (
    // Fond bleu clair pour toute la page
    <div className="flex h-screen bg-blue-100">
      {/* Conteneur central avec une ombre et un fond blanc */}
      <div className="flex-1 overflow-auto my-8 mx-auto shadow-lg bg-white rounded-lg max-w-6xl">
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
              <Detail />
            </div>
          </div>
          <InviteSection />
        </main>
      </div>
    </div>
  );
};

export default Page;
