import React from 'react';

import Sidebar from '@/components/Sidebar';

import { Suspense } from 'react';


import 'tailwindcss/tailwind.css';

export default async function Page() {
  

  // Supposons que vous ayez une variable `user` qui indique si l'utilisateur est connecté
  const user = true; // Mettez la logique de connexion ici

  return (
    <main className="flex flex-col h-screen bg-blue-200">
      <div className=" h-screen">
        <div className="col-span-1 bg-blue-200">
          <Sidebar />
        </div>
        <div className="col-span-6 p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  
  <Suspense fallback={<div>Loading...</div>}>
    <div className="col-span-full">
      
    </div>
  </Suspense>
</div>
        </div>
      
      </div>
    </main>
  );
}
