/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default function Calculator() {
  return (
    <div>
      <form action="/" method="post">
        <div className="border-1">
          <label
            htmlFor="age"
            className="font-bold text-purple-400 text-xl mb-2"
          >
            Age:
            <input type="text" id="age" />
          </label>
        </div>
        <div>
          <div>
            <span>Gender:</span>
            <label htmlFor="male">
              Male
              <input type="radio" id="male" name="male" value="male" />
            </label>
            <label htmlFor="male">
              Female
              <input type="radio" id="gender" name="female" value="female" />
            </label>
          </div>
          <div>
            <label htmlFor="height">
              Height:
              <input type="text" id="height" />
            </label>
          </div>
          <div>
            <label htmlFor="weight">
              Weight:
              <input type="text" id="weight" />
            </label>
          </div>
          <div>
            <label htmlFor="activity-select">
              Activity:
              <select name="acivity" id="acivity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
