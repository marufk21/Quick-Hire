import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <span className="w-8 h-8 border-t-4 border-b-4 border-green-500 rounded-full animate-spin"></span>
    </div>
  );
};

export default Loader;
 