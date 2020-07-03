import React from 'react';

export default function ResultTemplate() {
  return (
    <div className="p-4">
      <table className="table-fixed  rounded m-auto ">
        <thead>
          <tr className="border">
            <th className="px-4 py-2 w-1/8 border">{'  '}</th>
            <th className="px-4 py-2 w-1/4 text-md text-black border">
              Mild weight loss
            </th>
            <th className="px-4 py-2 w-1/4 text-md text-black border">
              Weight loss
            </th>
            <th className="px-4 py-2 w-1/4 text-md text-black border">
              Extreme weight loss
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 w-1/4 text-md text-black text-center border ">
              WeekDay
            </td>
            <td className="px-4 py-2 w-1/4 text-md text-black text-center border">
              0
            </td>
            <td className="px-4 py-2 w-1/4 text-md text-black text-center border">
              0
            </td>
            <td className="px-4 py-2 w-1/4 text-md text-black text-center border">
              0
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
