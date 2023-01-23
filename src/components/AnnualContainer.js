import React from 'react';
import AnnualPlan from './AnnualPlan';

const AnnualContainer = () => {
  return (
    <div className='mx-4 py-3 px-4 mt-5 rounded | annualContainer'>
        <div className='d-flex align-items-center justify-content-between'>
            <AnnualPlan />
            <a className='btn btn-lg | annualLink' href="#">Change</a>
        </div>
    </div>
  );
}

export default AnnualContainer;
