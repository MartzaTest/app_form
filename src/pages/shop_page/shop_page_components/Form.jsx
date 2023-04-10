import React, { useState } from 'react';
import '../../shop_page/shop_page_components/Shop_components.scss'
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';

const MAX_STEPS = 5;

function Form() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  const handleContinueClick = () => {
    if (currentStep < MAX_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  }

  return (
    <div className="Form_section">
      <div className='btnWrapper'>
        {currentStep > 1 && (
          <button className='btnBack' onClick={handleBackClick}><svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30L0 15L15 0L17.6719 2.625L7.17187 13.125H30V16.875H7.17187L17.6719 27.375L15 30Z" />
          </svg>
          Back</button>
          
        )}
        {currentStep < MAX_STEPS && (
          <button className='btncontinue' onClick={handleContinueClick}>Continue<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30L0 15L15 0L17.6719 2.625L7.17187 13.125H30V16.875H7.17187L17.6719 27.375L15 30Z" />
          </svg></button>
        )}
      </div>
      <div className='Form_section_content'>
        {currentStep === 1 && (
          <StepOne />
        )}
        {currentStep === 2 && (
          <StepTwo />
        )}
        {currentStep === 3 && (
          <StepThree />
        )}
        {currentStep === 4 && (
          <StepFour />
        )}
        {currentStep === 5 && (
          <StepFive />
        )}
      </div>
      <div className='btnWrapper'>
        {currentStep > 1 && (
          <button className='btnBack' onClick={handleBackClick}><svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30L0 15L15 0L17.6719 2.625L7.17187 13.125H30V16.875H7.17187L17.6719 27.375L15 30Z" />
          </svg>Back</button>
        )}
        {currentStep < MAX_STEPS && (
          <button className='btncontinue' onClick={handleContinueClick}>Continue <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30L0 15L15 0L17.6719 2.625L7.17187 13.125H30V16.875H7.17187L17.6719 27.375L15 30Z" />
          </svg></button>
        )}
      </div>
    </div>
  )
}

export default Form