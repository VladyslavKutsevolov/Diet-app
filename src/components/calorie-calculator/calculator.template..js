/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default function CalculatorTemplate() {
  return (
    <div className="max-w-md m-4">
      <form
        action="/"
        method="post"
        className="shadow-md rounded px-2 py-2 bg-indigo-100"
      >
        <h1 className="text-lg mx-1 mb-2">Calorie Calculator</h1>
        <div className="w-full flex">
          <div className="mx-1 w-14">
            <label htmlFor="age">Age:</label>
          </div>
          <div>
            <input
              type="text"
              id="age"
              className="shadow w-lg appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-4"
            />
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mx-2">
              Age between 15 - 80.
            </span>
          </div>
        </div>
        <div className="flex my-1 mx-1">
          <div className="mr-2">
            <span>Gender:</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              className="mx-1"
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="mx-1"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="w-full flex my-1">
          <div className="mx-1 w-14">
            <label htmlFor="height">Height:</label>
          </div>
          <div>
            <input
              type="text"
              id="height"
              className="shadow w-lg appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-1"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mx-1 w-14">
            <label htmlFor="weight">Weight:</label>
          </div>
          <div>
            <input
              type="text"
              id="weight"
              className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-1"
            />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="mx-2">
            <label htmlFor="activity-select">Activity:</label>
          </div>
          <div>
            <select
              name="acivity"
              id="acivity"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="1">Basal Metabolic Rate (BMR)</option>
              <option value="1.2">Sedentary: little or no exercise</option>
              <option value="1.375">Light: exercise 1-3 times/week</option>
              <option value="1.456">Moderate: exercise 4-5 times/week</option>
              <option value="1.55">
                Active: daily exercise or intense exercise 3-4 times/week
              </option>
              <option value="1.725">
                Very Active: intense exercise 6-7 times/week
              </option>
              <option value="1.9">
                Extra Active: very intense exercise daily, or physical job
              </option>
            </select>
          </div>
        </div>
        <div className="my-2 text-center">
          <div>
            <input
              type="submit"
              value="Calculate"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1"
            />
            <input
              type="button"
              value="Clear"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
