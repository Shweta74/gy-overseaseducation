

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servList } from '../../utility/mockData';
import { FaAngleRight } from "react-icons/fa";

const ServicesOption = () => {
  const { serId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(parseInt(serId));
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Find the selected service
    const selectedService = servList.find(service => service.id === parseInt(serId));
    if (selectedService) {
      // Update background image
      setBackgroundImage(selectedService.bgImage);
    }
  }, [serId]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    // Update the URL with the new serId
    navigate(`/services/${value}`);
  };

  return (
    <div>
      <div className="bg-cover bg-bottom bg-no-repeat bg-fixed h-96" style={{backgroundImage: `url(${backgroundImage})`}}></div>

      <div className="tabs my-32 min-w-fit mx-auto flex  flex-nowrap px-32 ">
        <div className="tabs-header w-54">
          {servList.map(({ serviceName, id }) => (
            <div
              key={id}
              className={`tab ${activeTab === id ? 'active' : ''} p-4  border-b border-slate-400 mx-8` } 
              onClick={() => handleTabChange(id)}
            >
              <div className="items-center flex">
               <h3 className='text-blue-950 text-2xl'> {serviceName} </h3>
               <FaAngleRight className='text-2xl  m-2 mt-1 text-slate-30'  color={activeTab === id ? 'darkblue' : 'grey'} /> 
              </div>
            </div>
          ))}
        </div>
        <div className="tabs-body flex-grow">
          {servList.map(({ id, desc, serviceName }) => (
            <div key={id} className={`tab-panel ${activeTab === id ? 'active' : 'hidden'}`}>
              {activeTab === id && (
                <div className='ml-8 '>
                  <h3 className='text-blue-950 text-2xl'>{serviceName}</h3>
                  <p className=' text-slate-500 text-xl mt-4'>{desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOption;