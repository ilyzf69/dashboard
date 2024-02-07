import React from 'react';
import Logo from '@/app/ui/logo2';

const patients = [
  { name: 'Jeremy Marc', time: '8AM' },
  { name: 'Kathy Mangiar.', time: '9AM' }
];

const PatientQueue = () => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">Patient Queue</h2>
      <div className="grid grid-cols-1 gap-4">
        {patients.map((patient, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center">
              <Logo />
              <span className="font-medium">{patient.name}</span>
            </div>
            <span className="text-sm font-light">{patient.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientQueue;
