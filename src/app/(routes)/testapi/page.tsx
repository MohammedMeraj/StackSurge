'use client';

import React, { useState } from 'react';

const PredictPage = () => {
  const [yearsExp, setYearsExp] = useState('');
  const [prevSuccess, setPrevSuccess] = useState('');
  const [marketSize, setMarketSize] = useState('');
  const [mvpRate, setMvpRate] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const payload = {
      years_exp: parseFloat(yearsExp),
      prev_success: parseInt(prevSuccess),
      market_size: parseFloat(marketSize),
      mvp_rate: parseFloat(mvpRate),
    };

    try {
      const res = await fetch('https://stacksurgeservice.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Error: ${res.status}`);

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setResponse(`Request failed: ${err.message}`);
      } else {
        setResponse('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Predict Startup Success</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          step="0.1"
          placeholder="Years of Experience"
          value={yearsExp}
          onChange={(e) => setYearsExp(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Previous Success (0 or 1)"
          value={prevSuccess}
          onChange={(e) => setPrevSuccess(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Market Size"
          value={marketSize}
          onChange={(e) => setMarketSize(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="MVP Rate"
          value={mvpRate}
          onChange={(e) => setMvpRate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
          disabled={loading}
        >
          {loading ? 'Predicting...' : 'Submit'}
        </button>
      </form>

      {response && (
        <pre className="mt-6 p-4 bg-gray-100 rounded overflow-x-auto">
          {response}
        </pre>
      )}
    </div>
  );
};

export default PredictPage;