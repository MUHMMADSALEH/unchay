import React from 'react';

const DisabilityTable = ({ disabilities }) => {
  return (
    <div className="min-h-screen bg-white w-full">
      <div className="w-full rounded-md border bg-white p-4 shadow-lg">
        <table className="w-full border-collapse">
          <caption className="text-lg font-semibold my-4 text-black">
            Disability Data from Research Study
          </caption>
          <thead>
            <tr className="bg-gray-300">
              <th className="p-2 border text-left text-black">Disability Category</th>
              <th className="p-2 border text-center text-black">Participants</th>
              <th className="p-2 border text-center text-black">Ballots Completed</th>
              <th className="p-2 border text-center text-black">
                Ballots Incomplete/Terminated
              </th>
              <th className="p-2 border text-center text-black" colSpan={2}>
                Results
              </th>
            </tr>
            <tr className="bg-gray-300">
              <th className="p-2 border" colSpan={4}></th>
              <th className="p-2 border text-center text-black">Accuracy</th>
              <th className="p-2 border text-center text-black">Time to Complete</th>
            </tr>
          </thead>
          <tbody>
            {disabilities.length > 0 ? (
              disabilities.map((disability) => (
                <tr key={disability._id}>
                  <td className="p-2 border text-left text-black">{disability.category}</td>
                  <td className="p-2 border text-center text-black">{disability.participants}</td>
                  <td className="p-2 border text-center text-black">
                    {disability.ballotsCompleted}
                  </td>
                  <td className="p-2 border text-center text-black">
                    {disability.ballotsIncompleteTerminated}
                  </td>
                  <td className="p-2 border text-center text-black">
                    {disability.resultsAccuracy}
                  </td>
                  <td className="p-2 border text-center text-black">
                    {disability.timeToComplete}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-6 text-black">
                  No data available. Please click the "Seed Initial Data" button.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisabilityTable;
