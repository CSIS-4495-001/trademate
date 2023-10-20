import React from "react";
import Image from "next/image";
// import loader from './spinner.gif';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>

    // <div className="w-full h-screen flex item-center justify-center">
    //     <Image src={loader} alt="Loading..." width={100} height={100} className="mx-auto" />
    // </div>
  );
};

export default Spinner;
