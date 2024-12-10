'use client';
import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { Sidebar } from '@/components/Layout/Sidebar';
import ProgressBar from '@/components/Progress/ProgressBar';
import DescriptionEditor from '@/components/ProgressBar/Description/DescriptionEditor';
import FormComponent from '@/components/ProgressBar/Basic/FormComponent';
import PrizeComponent from '@/components/ProgressBar/Reward/PrizeComponent';
import BountySuccess from '@/components/ProgressBar/BountySuccess/BountySuccess';

import { Menu } from 'lucide-react'; 

import TeamMembers from '@/components/TeamSettingLayout/TeamMembers';

const CreateListingForm: FC = () => {
  // const [form] = useForm();
  const [activeStep, setActiveStep] = useState(0); 
  const [stepValid, setStepValid] = useState(false); 
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [activeComponent, setActiveComponent] = useState<string>('MyListing');


  const stepContent = [
    {
      heading: 'Create a Listing',
      paragraph: "Now let's learn a bit more about the work you need completed",
      buttonLabel: 'Continue',
      component: (
        <FormComponent
          onValidate={(isValid: boolean) => setStepValid(isValid)}
        />
      ),
    },
    {
      heading: 'Description',
      paragraph: "Now let's learn a bit more about the work you need completed",
      buttonLabel: 'Continue',
      component: (
        <DescriptionEditor
          onValidate={(isValid: boolean) => setStepValid(isValid)}
        />
      ),
    },
    {
      heading: 'Add the Reward Amount',
      paragraph: 'Decide the compensation amount for your listing',
      buttonLabel: 'Publish Now',
      component: (
        <PrizeComponent
          onValidate={(isValid: boolean) => setStepValid(isValid)}
        />
      ),
    },
  ];

  const handleContinue = () => {
    if (activeStep < stepContent.length - 1) {
      setActiveStep(activeStep + 1); 
      setStepValid(false); 
    } else {
      setIsSuccess(true); 
    }
  };

  const { heading, paragraph, buttonLabel, component } =
    stepContent[activeStep] || {};

    return (
      <div className="flex min-h-screen bg-white">
   
        <div className="hidden lg:block w-60">
          <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="w-60 bg-white min-h-full">
              <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
            </div>
          </div>
        )}
    
     
        {!isSidebarOpen && ( 
          <button
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow-md rounded-full"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
        )}
    
        <main className="flex-1 p-6">
        
{isSuccess ? (
  <div>
     <div className="w-72 pr-4">
                  <ProgressBar activeStep={activeStep} />
                </div>
    <BountySuccess />
  </div>
) : activeComponent === 'TeamSettings' ? (
  <TeamMembers />
) : (

            <div className="flex justify-start max-w-4xl">
              <div className="flex-shrink-0 w-full md:w-3/4 mx-0">
                <div className="w-2/5 pr-4">
                  <ProgressBar activeStep={activeStep} />
                </div>
                <div className="bg-white rounded-lg">
                  <h1 className="text-2xl font-semibold mb-2 mt-8 text-[#334155]">
                    {heading}
                  </h1>
                  <p className="text-[#94A3B8] mb-6">{paragraph}</p>
                  {component}
    
                  <div className="justify-between pt-6 space-y-6">
                    <Button
                      type="primary"
                      className="w-full h-12 text-lg"
                      style={{
                        backgroundColor: '#EEF2FF',
                        borderColor: 'transparent',
                        color: '#5E5E5E',
                      }}
                    >
                      Save Draft
                    </Button>
    
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full h-12 border-none text-lg"
                      style={{
                        background: 'linear-gradient(to right, #1FBF4A, #22CC77)',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          'linear-gradient(to right, #22CC77, #1FBF4A)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background =
                          'linear-gradient(to right, #1FBF4A, #22CC77)')
                      }
                      onClick={handleContinue}
                      disabled={!stepValid}
                    >
                      {buttonLabel}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
    
  
};

export default CreateListingForm;
