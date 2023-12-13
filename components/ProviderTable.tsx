import React, { useState, useEffect } from 'react';

const ProviderTable: React.FC<{ tariffs: any[] }> = ({ providers }) => {
  return (
    <div>
        <div id="Table" className="fixed inset-0 flex items-center justify-center bg-white z-10">
          <div className="grid grid-cols-4 gap-4">
            {providers.map((provider, index) => (
              <div key={index} className="flex flex-col items-center p-4" onClick={function(){document.getElementById("Table")?.classList.add("hidden")}}>
                <div>{provider.providerName}</div>
                <img className="w-10 h-10" src={provider.imageUrl} alt={provider.providerName} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};


export default ProviderTable;
