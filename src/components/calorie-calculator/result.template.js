/* eslint-disable react/prop-types */
import React from 'react';

export default function ResultTemplate({ setToggleFlip }) {
  return (
    <>
      <div className="shadow-md rounded overflow-hidden top-auto h-full w-full bg-green-100">
        <div className="w-full h-full flex flex-col justify-center">
          <button
            type="button"
            onClick={() => setToggleFlip(false)}
            className=" bg-transparent top-0 hover:bg-green-500 text-green-700 font-semibold hover:text-white border border-green-600 hover:border-transparent rounded w-12 h-6 mb-1"
          >
            back
          </button>
          <div className="flex flex-wrap justify-around mb-2 text-center">
            <div className="w-2/4 p-2 border-solid border-2 border-gray-500">
              Maintain weight
            </div>
            <div className="w-1/3 p-2 border-solid border-2 border-gray-500">
              111
            </div>
          </div>
          <div className="flex flex-wrap justify-around mb-2 text-center">
            <div className="w-2/4 p-2 border-solid border-2 border-gray-500">
              Mild weight loss
              <span className="block text-xs text-gray-500">0.25 kg/week</span>
            </div>
            <div className="w-1/3 p-2 border-solid border-2 border-gray-500">
              111
            </div>
          </div>
          <div className="flex flex-wrap justify-around mb-2 text-center">
            <div className="w-2/4 p-2 border-solid border-2 border-gray-500">
              Weight loss
              <span className="block text-xs text-gray-500">0.5 kg/week</span>
            </div>
            <div className="w-1/3 p-2 border-solid border-2 border-gray-500">
              111
            </div>
          </div>
          <div className="flex flex-wrap justify-around mb-2 text-center">
            <div className="w-2/4 p-2 text-center  border-solid border-2 border-gray-500">
              Extreme weight loss
              <span className="block text-xs text-gray-500">0.1 kg/week</span>
            </div>
            <div className="w-1/3 p-2 border-solid border-2 border-gray-500">
              111
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
