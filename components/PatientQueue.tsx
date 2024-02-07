import React from 'react';
import Logo from '@/app/ui/logo2';

const patients = [
  { name: 'Jeremy Marc', time: '8AM' },
  { name: 'Kathy Mangiar.', time: '9AM' },
  { name: 'Kevin De Bryne', time: '9AM' }
];

const PatientQueue = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">Patient Queue</h2>
      <div className="flex flex-col">
        {patients.map((patient, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
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
