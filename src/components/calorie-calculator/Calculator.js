import React, { useState } from 'react';
import CalculatorTemplate from './calculator.template';
import ResultTemplate from './result.template';

const calcValues = {
  height: '',
  weight: '',
  age: '',
  gender: '',
  activity: ''
};

export default function Calculator() {
  const [toggleFlip, setToggleFlip] = useState(false);
  const [values, setValues] = useState(calcValues);
  const flipCard = `relative w-full h-full ${
    toggleFlip ? 'rotate-y-180' : null
  } transform-preserve-3d transition ease-linear duration-500`;

  const handleChange = target => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };
  console.log('values', values);
  console.log('calcValues', calcValues);

  return (
    <>
      <div className="max-w-md h-xs perspective-1000">
        <div className={flipCard}>
          <div className="absolute top-0 left-0 rotate-y-0 backface-hidden">
            <CalculatorTemplate
              setToggleFlip={setToggleFlip}
              handleChange={handleChange}
            />
          </div>
          <div className="h-xs max-w-md top-0 left-0 rotate-y-180 backface-hidden">
            <ResultTemplate setToggleFlip={setToggleFlip} />
          </div>
        </div>
      </div>
    </>
  );
}
