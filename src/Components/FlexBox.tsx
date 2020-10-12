import React from "react";

export const FlexBox = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row-reverse bg-gray-200">
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          1
        </div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          2
        </div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          3
        </div>
      </div>
    </div>
  );
};
