import React from 'react';
import Calculator from './components/calorie-calculator/Calculator';
import InfoBoard from './components/InfoSection/InfoBoard';

export const App = () => (
  <div>
    <div className="grid">
      <Calculator />
    </div>
    <div className="border-lg shadow-md rounded p-2 m-2  bg-gray-200">
      <InfoBoard />
    </div>
  </div>
);
