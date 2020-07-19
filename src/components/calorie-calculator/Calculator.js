import React from 'react';
import CalculatorTemplate from './calculator.template';
import ResultTemplate from './result.template';

export default function Calculator() {
  return (
    <>
      <div className="max-w-md h-xs perspective-1000 flex">
        <div className="relative w-full h-full transform hover:rotate-y-180 transform-preserve-3d transition ease-linear duration-700">
          <div className="absolute top-0 left-0 rotate-y-0 backface-hidden">
            <CalculatorTemplate />
          </div>
          <div className="h-xs max-w-md top-0 left-0 rotate-y-180 backface-hidden">
            <ResultTemplate />
          </div>
        </div>
      </div>
    </>
  );
}
