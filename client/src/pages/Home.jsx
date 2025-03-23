import React, { useEffect, useState } from 'react';

import DisabilityTable from '../Components/DisabilityTable';
import { fetchDisabilities, seedData } from '../Services/api';

const Home = () => {
  const [disabilities, setDisabilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchDisabilities();
        setDisabilities(data);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSeedData = async () => {
    try {
      setLoading(true);
      await seedData();
      const data = await fetchDisabilities();
      setDisabilities(data);
      setError(null);
    } catch (err) {
      setError('Failed to seed data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8" >
      <div className="max-w-7xl mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Disability Data Visualization</h1>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <div className="mb-8 flex justify-end">
          <button
            onClick={handleSeedData}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Seed Initial Data
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <DisabilityTable disabilities={disabilities} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
