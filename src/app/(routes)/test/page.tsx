'use client';

import { useState, FormEvent } from 'react';

interface PredictionResult {
  prediction: number;
  probability: number;
  message: string;
}

interface ErrorResponse {
  error: string;
}

export default function PredictPage() {
  const [yearsExp, setYearsExp] = useState('');
  const [prevSuccess, setPrevSuccess] = useState('');
  const [marketSize, setMarketSize] = useState('');
  const [mvpRate, setMvpRate] = useState('');
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setIsLoading(true);

    try {
      const response = await fetch('https://stacksurgeservice.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          years_exp: parseFloat(yearsExp),
          prev_success: parseInt(prevSuccess),
          market_size: parseFloat(marketSize),
          mvp_rate: parseFloat(mvpRate),
        }),
      });

      const data: PredictionResult | ErrorResponse = await response.json();

      if ('error' in data) {
        setError(data.error);
      } else {
        setResult(data as PredictionResult);
      }
    } catch (err) {
      setError('Failed to connect to the API. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Startup Profitability Predictor
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="yearsExp" className="block text-sm font-medium text-gray-700">
              Years of Experience
            </label>
            <input
              id="yearsExp"
              type="number"
              step="0.1"
              value={yearsExp}
              onChange={(e) => setYearsExp(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="prevSuccess" className="block text-sm font-medium text-gray-700">
              Previous Successes
            </label>
            <input
              id="prevSuccess"
              type="number"
              step="1"
              value={prevSuccess}
              onChange={(e) => setPrevSuccess(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="marketSize" className="block text-sm font-medium text-gray-700">
              Market Size (Millions)
            </label>
            <input
              id="marketSize"
              type="number"
              step="0.1"
              value={marketSize}
              onChange={(e) => setMarketSize(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="mvpRate" className="block text-sm font-medium text-gray-700">
              MVP Success Rate (0 to 1)
            </label>
            <input
              id="mvpRate"
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={mvpRate}
              onChange={(e) => setMvpRate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isLoading ? 'Predicting...' : 'Predict'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            <p className="font-semibold">Prediction: {result.message}</p>
            <p>Probability of Profitability: {result.probability}%</p>
          </div>
        )}
      </div>
    </div>
  );
}