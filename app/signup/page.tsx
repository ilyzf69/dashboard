import InviteSection from '@/components/InviteSection';
import 'tailwindcss/tailwind.css';

const Page = () => {
  return (
    <div className="flex flex-col h-screen bg-teal-100">
     
      <div className="flex-grow overflow-auto">
        
          
         
          <div className="mt-6">
            <InviteSection />
          </div>
       
      </div>
    </div>
  );
};

export default Page;
