import React from 'react';

export const AwesomeLink = ({
  name,address,email,phone,id
}) => {
  return (
    <div key={id} className="shadow  max-w-md  rounded">
      
      <div className="p-5 flex flex-col space-y-2">
        <p className="text-sm text-blue-500">{name}</p>
        <p className="text-lg font-medium">{phone}</p>
        <p className="text-lg font-medium">{email}</p>
        <p className="text-gray-600">{address}</p>
    
      </div>
    </div>
  );
};
