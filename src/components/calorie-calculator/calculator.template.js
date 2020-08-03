/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function CalculatorTemplate({ setToggleFlip, handleChange }) {
  return (
    <>
      <div className="shadow-md h-full text-center rounded overflow-hidden bg-blue-200">
        <div className="text-center m-4 text-lg font-bold">
          <span>Calculator</span>
        </div>
        <form action="/" method="post">
          <div className="flex flex-wrap mb-2 max-w-md justify-around">
            <div className="w-1/3">
              <label
                htmlFor="height"
                className="uppercase block text-gray-700 text-xs font-bold"
              >
                Height:
              </label>
              <input
                type="text"
                id="height"
                name="height"
                onChange={handleChange}
                className="shadow appearance-none block border rounded py-1 px-2 text-gray-700 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/3">
              <label
                htmlFor="weight"
                className="uppercase block text-gray-700 text-xs font-bold"
              >
                Weight:
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                onChange={handleChange}
                className="shadow block appearance-none border rounded py-1 px-2 text-gray-700 focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex flex-wrap max-w-md justify-around mb-2">
            <div className="w-1/3">
              <label
                htmlFor="age"
                className="uppercase block text-gray-700 text-xs font-bold"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={handleChange}
                className="shadow block appearance-none border rounded py-1 px-2 text-gray-700 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/3">
              <label
                htmlFor="gender"
                className="uppercase block text-gray-700 text-xs font-bold"
              >
                Gender:
              </label>
              <div className="mt-1">
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="male"
                  className="mx-1"
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="female"
                  className="mx-1"
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div className="max-w-lg px-10">
            <label
              htmlFor="activity-select"
              className="uppercase block text-gray-700 text-xs font-bold"
            >
              Activity:
            </label>
            <div>
              <select
                name="activity"
                id="activity"
                onChange={handleChange}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-2 py-2  rounded shadow focus:outline-none focus:shadow-outline"
              >
                <option value="1">Basal Metabolic Rate (BMR)</option>
                <option value="1.2">Sedentary: little or no exercise</option>
                <option value="1.375">Light: exercise 1-3 times/week</option>
                <option value="1.55">Moderate: exercise 3-5 times/week</option>
                <option value="1.725">
                  Very Active: intense exercise 6-7 times/week
                </option>
                <option value="1.9">
                  Extra Active: very intense exercise daily, or physical job
                </option>
              </select>
            </div>
          </div>
          <div className="flex justify-center m-4">
            <input
              type="submit"
              value="Calculate"
              onClick={e => {
                e.preventDefault();
                return setToggleFlip(true);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1"
            />
            <input
              type="button"
              value="Clear"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CalculatorTemplate;
