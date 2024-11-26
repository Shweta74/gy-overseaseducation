import React, { useState } from 'react';

import { servList } from '../../utility/mockData';
const Australia = () => {
  const [activeTab, setActiveTab] = useState(servList[0]);

  return (
    <div className="flex">
      <div className="w-1/4">
        <div className="tabs">
          {servList.map(service => (
            <button
              key={service.id}
              className={`tab ${activeTab.id === service.id ? 'active' : ''}`}
              onClick={() => setActiveTab(service)}
            >
              {service.serviceName}
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4">
        <div className="tab-content p-6">
          <h2 className="text-2xl font-bold mb-4">{activeTab.serviceName}</h2>
          <p>{activeTab.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Australia;