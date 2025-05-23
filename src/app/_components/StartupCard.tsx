"use client"
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';

// Define the shape of the props
interface Company {
  _id: string;
  email: string;
  businessType: string;
  companyname: string;
  companyServices: string;
  website: string;
  companyLogo: string;
  description: string;
  currentRevenue: number;
  revenueIncreased: number;
  grossMargin: number;
  operatingMargin: number;
  netProfitMargin: number;
  freeCashFlow: number;
  burnRate: number;
  latestValuation: number;
  ebitda: number;
  projectedValuation: number;
  yearsOfExperience: number;
  achievementRate: number; 
  marketSize: number;
  mvpSuccessRate: number;
}

interface CompanyCardProps {
  getCompany: Company[];
}

interface PredictionResult {
  message: string;
  prediction: number;
  probability: number;
}

const CompanyCard: React.FC<CompanyCardProps> = (props) => {
  const values = props.getCompany;
  const [predictions, setPredictions] = useState<{[key: string]: PredictionResult | null}>({});
  const [loadingPredictions, setLoadingPredictions] = useState<{[key: string]: boolean}>({});

  const fetchPrediction = async (company: Company) => {
    const companyId = company._id;
    
    // Set loading state for this specific company
    setLoadingPredictions(prev => ({ ...prev, [companyId]: true }));

    const payload = {
      years_exp: parseFloat(company.yearsOfExperience.toString()),
      prev_success: parseInt(company.achievementRate.toString()),
      market_size: parseFloat(company.marketSize.toString()),
      mvp_rate: parseFloat(company.mvpSuccessRate.toString()),
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
      setPredictions(prev => ({ ...prev, [companyId]: data }));
    } catch (err: unknown) {
      console.error(`Prediction failed for ${company.companyname}:`, err);
      setPredictions(prev => ({ 
        ...prev, 
        [companyId]: { 
          message: 'Prediction unavailable', 
          prediction: 0, 
          probability: 0 
        } 
      }));
    } finally {
      setLoadingPredictions(prev => ({ ...prev, [companyId]: false }));
    }
  };

  // Fetch predictions for all companies when component mounts
  useEffect(() => {
    values?.forEach(company => {
      if (company.yearsOfExperience && company.achievementRate && company.marketSize && company.mvpSuccessRate) {
        fetchPrediction(company);
      }
    });
  }, [values]);

  const getPredictionBadgeColor = (prediction: number) => {
    return prediction === 1 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : 'bg-red-100 text-red-800 border-red-200';
  };

  const getPredictionIcon = (prediction: number) => {
    return prediction === 1 ? '📈' : '📉';
  };
  
  return (
    <div>
      {values?.map((value) => {
        const prediction = predictions[value._id];
        const isLoadingPrediction = loadingPredictions[value._id];

        return (
          <div key={value?.email} className='p-7 flex flex-col justify-center items-center'>
            <div className='w-full h-fit py-6 px-8 border border-gray-300 rounded-md'>
              <div className='flex flex-row m-w-[60vw] items-center justify-between'>
                <div className='flex flex-row gap-3 items-center justify-center'>
                  <Image src={value?.companyLogo || ""} className='w-16 h-16 rounded-md' width={100} height={100} alt="hello"/>
                  <div>
                    <div className='text-3xl font-bold text-gray-800 '>{value?.companyname}</div>
                    <div className='text-sm text-gray-800'>{value?.companyServices}</div>
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-8'>
                  <a href={value?.website} target='_blank' className='text-gray-800 hover:text-gray-500'>Visit Website</a>
                  <a href={''} className='text-gray-800 hover:text-gray-500'>About Company</a>
                </div>
              </div>

              <div className='mt-6 mb-6 text-base '>{value?.description}</div>
              
              {/* Prediction Section */}
              <div className='mb-6 p-4 bg-gray-50 rounded-md border'>
                <h3 className='text-lg font-semibold text-gray-800 mb-3'>Profitability Prediction</h3>
                
                {isLoadingPrediction ? (
                  <div className='flex items-center gap-2'>
                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600'></div>
                    <span className='text-sm text-gray-600'>Analyzing profitability...</span>
                  </div>
                ) : prediction ? (
                  <div className='space-y-3'>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getPredictionBadgeColor(prediction.prediction)}`}>
                      <span>{getPredictionIcon(prediction.prediction)}</span>
                      {prediction.message}
                    </div>
                    <div className='flex gap-4 text-sm'>
                      <div className='flex items-center gap-1'>
                        <span className='font-medium text-gray-700'>Confidence:</span>
                        <span className={`font-bold ${prediction.prediction === 1 ? 'text-green-600' : 'text-red-600'}`}>
                          {prediction.probability}%
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='text-sm text-gray-500'>
                    Prediction data unavailable
                  </div>
                )}
              </div>

              {/* Company Metrics */}
              <div className='mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
                <div className='bg-blue-50 p-3 rounded-md'>
                  <div className='font-medium text-blue-800'>Experience</div>
                  <div className='text-blue-600'>{value?.yearsOfExperience} years</div>
                </div>
                <div className='bg-green-50 p-3 rounded-md'>
                  <div className='font-medium text-green-800'>Achievement Rate</div>
                  <div className='text-green-600'>{value?.achievementRate}%</div>
                </div>
                <div className='bg-purple-50 p-3 rounded-md'>
                  <div className='font-medium text-purple-800'>Market Size</div>
                  <div className='text-purple-600'>${value?.marketSize}M</div>
                </div>
                <div className='bg-orange-50 p-3 rounded-md'>
                  <div className='font-medium text-orange-800'>MVP Success</div>
                  <div className='text-orange-600'>{value?.mvpSuccessRate}%</div>
                </div>
              </div>

              <div className='flex flex-row items-center justify-between rounded-md overflow-hidden'>
                <div className='text-base font-bold text-gray-700'>
                  
                </div>
                <div className='flex flex-row items-center justify-center gap-6'>
                  <div className='h-11 flex items-center justify-center border border-gray-300 rounded-md text-sm p-5 cursor-pointer hover:bg-gray-100'>
                    Contact Company
                  </div>

                  {value?.businessType === "Company" ? 
                    <Link href={`/investor/companies/${value?._id}`}>
                      <Button>More Details</Button>
                    </Link> : 
                    <Link href={`/investor/startups/${value?._id}`}>
                      <Button>More Details</Button>
                    </Link>
                  }
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyCard;