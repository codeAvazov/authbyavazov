import React from "react";
import "./loader.css";
import LoaderX from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className="loadWrap">
      <LoaderX
         type="Audio"
         color="#00BFFF"
         height={150}
         width={150}
      />
    </div>
  );
};
