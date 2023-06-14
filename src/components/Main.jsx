import React from "react";

export const Main = ({ heading, title = "", price = "" }) => {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col justify-around">
        <div className="px-8 mt-10 lg:mt-40 flex flex-col gap-8 text-white items-center justify-center">
          <div className="uppercase text-xl text-center">{heading}</div>
          <h1 className="text-4xl lg:px-40 lg:text-7xl text-center font-fancy">
            {title === "" && (
              <>
                We offer specially curated{" "}<br/>
                <span className="font-fancy italic font-thin">Chardham{" "}</span>
                Yatra packages.<br/> Book now!
              </> 
            )} 
            {title}
          </h1>
          <div className="flex flex-col text-2xl text-center font-fancy">
            <h1 className="font-fancy">{price}</h1>
          </div>
        </div>
        <div className="mx-8 lg:mx-56 text-white">
          <div>
            <span>India, Uttarakhand</span>
          </div>
        </div>
      </div>
    </div>
  );
};
